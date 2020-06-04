const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Client = require('../models/client');
const Address = require('../models/address');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const clients = await Client.find().populate('addressId');

        return res.send({ clients });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar os clientes' });
    }
});

router.get('/:clientId', async (req, res) => {
    try {
        const client = await Client.findById(req.params.clientId).populate('addressId');

        return res.send({ client });
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
            occupationId,
            address
        } = req.body;

        const client = await Client.create({
            name,
            socialSecurityNumber,
            dateOfBirth,
            sex,
            email,
            password,
            occupationId
        });

        const clientAddress = new Address({ ...address });
        await clientAddress.save();
        client.addressId = clientAddress._id;

        await client.save();

        return res.send({ client });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao criar um cliente' });
    }
});

router.put('/:clientId', async (req, res) => {
    try {
        const {
            _id,
            name,
            socialSecurityNumber,
            dateOfBirth,
            sex,
            email,
            occupationId,
            address,
            active
        } = req.body;

        const clientForUpdate = await Client.create({
            _id,
            name,
            socialSecurityNumber,
            dateOfBirth,
            sex,
            email,
            occupationId,
            active
        });

        const clientAddress = new Address({ ...address });
        await Address.findByIdAndUpdate(address._id, clientAddress);
        client.addressId = clientAddress._id;

        await Client.findByIdAndUpdate(req.params.clientId, clientForUpdate);
        // await Client.findByIdAndUpdate(req.params.clientId, req.body);
        const client = await Client.findById(req.params.clientId);

        return res.send({ client });
    } catch (err) {
        console.log(err);
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