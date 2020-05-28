const uuidv4 = require('uuid/v4');

module.exports = app => {
    const clientManagementDB = app.data.clientManagement;
    const controller = {};
    const { clientManagement: clientManagementMock } = clientManagementDB;

    controller.listClientManagement = (req, res) => res.status(200).json(clientManagementDB);

    controller.saveClientManagement = (req, res) => {
        clientManagementMock.data.push({
            id: uuidv4(),
            parentId: uuidv4(),
            name: req.body.name,
            birthDate: req.body.birthDate,
            cellphone: req.body.cellphone,
            phone: req.body.phone,
            email: req.body.email,
            occupation: req.body.occupation,
            state: req.body.state
        });
        res.status(201).json(clientManagementMock);
    }

    return controller;
}