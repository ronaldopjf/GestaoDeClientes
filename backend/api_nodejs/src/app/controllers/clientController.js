const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Client = require('../models/client');
const Address = require('../models/address');

const router = express.Router();

// router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const clients = await Client.find()
            .where({ $where: function () { return this.active == true } })
            .populate('address')
            .populate('occupation');

        let returnedClients = [];
        for (let i = 0; i < clients.length; i++) {
            returnedClients.push(clients[i].transform());
        }

        return res.send(returnedClients);
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar os clientes' });
    }
});

router.get('/:clientId', async (req, res) => {
    try {
        const client = await Client.findById(req.params.clientId).populate('address').populate('occupation');

        return res.send(client);
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar o cliente' });
    }
});

router.post('/', async (req, res) => {
    try {
        const {
            name,
            socialSecurityNumber,
            dateOfBirth,
            sex,
            email,
            password,
            idOccupation,
            address
        } = req.body;

        const createdClient = await Client.create({
            name,
            socialSecurityNumber,
            dateOfBirth,
            sex,
            email,
            password
        });

        const createdAddress = new Address({ ...address });
        await createdAddress.save();

        createdClient.address = createdAddress._id;
        createdClient.occupation = idOccupation;
        await createdClient.save();

        return res.send(createdClient);
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao criar um cliente' });
    }
});

router.put('/', async (req, res) => {
    try {
        const updatedAddress = await Address.updateOne(
            { _id: req.body.address._id },
            {
                $set: {
                    postalCode: req.body.address.postalCode,
                    publicPlace: req.body.address.publicPlace,
                    number: req.body.address.number,
                    complement: req.body.address.complement,
                    neighborhood: req.body.address.neighborhood,
                    locality: req.body.address.locality,
                    state: req.body.address.state,
                    active: req.body.address.active
                }
            });

        const updatedClient = await Client.findById(req.body.id);
        updatedClient.name = req.body.name;
        updatedClient.socialSecurityNumber = req.body.socialSecurityNumber;
        updatedClient.dateOfBirth = req.body.dateOfBirth;
        updatedClient.sex = req.body.sex;
        updatedClient.email = req.body.email;
        updatedClient.occupation = req.body.idOccupation;
        updatedClient.address = req.body.address._id;
        updatedClient.active = req.body.active;

        await updatedClient.save();

        return res.send();

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao atualizar o cliente' });
    }
});

router.put('/inactivate/:clientId', async (req, res) => {
    try {
        await Client.findByIdAndUpdate(req.params.clientId, { active: false });

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao atualizar o cliente' });
    }
});

router.delete('/:clientId', async (req, res) => {
    try {
        await Client.findByIdAndRemove(req.params.clientId);

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao excluir o cliente' });
    }
});

module.exports = app => app.use('/client', router);