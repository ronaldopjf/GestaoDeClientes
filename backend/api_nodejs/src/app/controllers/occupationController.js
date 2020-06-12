const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Occupation = require('../models/occupation');

const router = express.Router();

// router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const occupations = await Occupation.find().where({ $where: function () { return this.active == true } });

        let returnedOccupations = [];
        for (let i = 0; i < occupations.length; i++) {
            returnedOccupations.push(occupations[i].transform());
        }

        return res.send(returnedOccupations);
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar os cargos' });
    }
});

router.get('/:occupationId', async (req, res) => {
    try {
        const occupation = await Occupation.findById(req.params.occupationId);

        return res.send(occupation);
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar o cargo' });
    }
});

router.post('/', async (req, res) => {
    try {
        const occupation = await Occupation.create(req.body);

        return res.send(occupation);
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao criar um cargo' });
    }
});

router.put('/', async (req, res) => {
    try {
        await Occupation.findByIdAndUpdate(req.body.id, req.body);
        const occupation = await Occupation.findById(req.body.id);

        return res.send(occupation);
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao atualizar o cargo' });
    }
});

router.put('/inactivate/:occupationId', async (req, res) => {
    try {
        await Occupation.findByIdAndUpdate(req.params.occupationId, { active: false });

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao atualizar o cargo' });
    }
});

router.delete('/:occupationId', async (req, res) => {
    try {
        await Occupation.findByIdAndDelete(req.params.occupationId);

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao excluir o cargo' });
    }
});

module.exports = app => app.use('/occupation', router);