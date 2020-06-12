const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailer = require('../../modules/mailer')

const authConfig = require('../../config/auth.json');

const Client = require('../models/client');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
}

router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if (await Client.findOne({ email }))
            return res.status(400).send({ error: 'O cliente já existe' });

        const client = await Client.create(req.body);

        client.password = undefined;

        return res.send({
            client,
            token: generateToken({ id: client.id })
        });
    } catch (err) {
        return res.status(400).send({ error: 'O cadastro falhou' });
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;

    const client = await Client.findOne({ email }).select('+password');

    if (!client)
        return res.status(400).send({ error: 'Cliente não encontrado' });

    if (!await bcrypt.compare(password, client.password))
        return res.status(400).send({ error: 'Senha inválida' });

    client.password = undefined;

    const token =

        res.send({
            client,
            token: generateToken({ id: client.id })
        });
});

router.post('/forgot_password', async (req, res) => {
    const { email } = req.body;

    try {
        const client = await Client.findOne({ email });

        if (!client)
            return res.status(400).send({ error: 'Cliente não encontrado' });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await Client.findByIdAndUpdate(client.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now
            }
        });

        mailer.sendMail({
            to: email,
            from: 'diego@rocketseat.com.br',
            template: 'auth/forgot_password',
            context: { token },
        }, (err) => {
            if (err)
                return res.status(400).send({ error: 'Não foi possível enviar email de recuperação de senha' });

            return res.send();
        })

    } catch (err) {
        res.status(400).send({ error: 'Erro ao recuperar a senha, tente novamente' });
    }
});

module.exports = app => app.use('/auth', router);