var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

var Client = require('./app/models/client/client');
var Occupation = require('./app/models/occupation/occupation');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function (req, res, next) {
    console.log('Consumindo a API gestao-de-clientes');
    next();
});

router.get('/', function (req, res) {
    res.json({ message: 'API gestao-de-clientes' });
});

router.route('/occupation')
    .get(function (req, res) {
        Occupation.find(function (error, occupations) {
            if (error) {
                res.send(error);
            }
            res.json(occupations);
        });
    })

router.route('/client')
    .get(function (req, res) {
        Client.find(function (error, clients) {
            if (error) {
                res.send(error);
            }
            res.json(clients);
        });
    })
    .post(function (req, res) {
        var client = new Client();

        client.id = req.body.id;
        client.name = req.body.name;
        client.socialSecurityNumber = req.body.socialSecurityNumber;
        client.dateOfBirth = req.body.dateOfBirth;
        client.sex = req.body.sex;
        client.email = req.body.email;
        client.password = req.body.password;
        client.active = "true";

        client.address.id = req.body.address.id;
        client.address.postalCode = req.body.address.postalCode;
        client.address.publicPlace = req.body.address.publicPlace;
        client.address.number = req.body.address.number;
        client.address.neighborhood = req.body.address.neighborhood;
        client.address.locality = req.body.address.locality;
        client.address.state = req.body.address.state;
        client.address.active = "true";

        // client.occupation.id = req.body.occupation.id;
        // client.occupation.name = req.body.occupation.name;
        // client.occupation.active = "true";

        client.save(function (error) {
            if (error) {
                res.send(error);
            }

            res.json({ message: 'Cliente cadastrado com sucesso' });
        });
    });

router.route('/client/:client_id')
    .get(function (req, res) {
        Client.findById(req.params.client_id, function (error, client) {
            if (error) {
                res.send(error);
            }
            res.json(client);
        });
    })
    .put(function (req, res) {
        Client.findById(req.params.client_id, function (error, client) {
            if (error) {
                res.send(error);
            }

            client.id = req.body.id;
            client.name = req.body.name;
            client.socialSecurityNumber = req.body.socialSecurityNumber;
            client.dateOfBirth = req.body.dateOfBirth;
            client.sex = req.body.sex;
            client.email = req.body.email;
            client.password = req.body.password;
            client.active = req.body.active;

            client.address.id = req.body.address.id;
            client.address.postalCode = req.body.address.postalCode;
            client.address.publicPlace = req.body.address.publicPlace;
            client.address.number = req.body.address.number;
            client.address.neighborhood = req.body.address.neighborhood;
            client.address.locality = req.body.address.locality;
            client.address.state = req.body.address.state;
            client.address.active = req.body.address.active;

            client.occupation.id = req.body.occupation.id;
            client.occupation.name = req.body.occupation.name;
            client.occupation.active = req.body.occupation.active;

            client.save(function (error) {
                if (error) {
                    res.send(error);
                }

                res.json({ message: 'Cliente atualizado com sucesso' });
            });
        });
    })
    .delete(function (req, res) {
        Client.remove({
            _id: req.params.client_id
        }, function (error) {
            if (error) {
                res.send(error);
            }

            res.json({ message: 'Cliente excluído com Sucesso' });
        });
    });

app.use('/', router);
app.listen(port);
console.log('Iniciando a aplicação na porta ' + port);