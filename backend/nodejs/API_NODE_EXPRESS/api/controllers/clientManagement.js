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

    controller.updateClientManagement = (req, res) => {
        const { clientId } = req.params;
        const foundClientIndex = clientManagementMock.data.findIndex(client => client.id === clientId);

        if (foundClientIndex === -1) {
            res.status(404).json({
                message: 'Cliente não encontrado na base de dados',
                success: false,
                clientManagement: clientManagementMock
            });
        } else {
            const newClient = {
                id: clientId,
                parentId: req.body.parentId,
                name: req.body.name,
                birthDate: req.body.birthDate,
                cellphone: req.body.cellphone,
                phone: req.body.phone,
                email: req.body.email,
                occupation: req.body.occupation,
                state: req.body.state,
                createdAt: new Date()
            };

            clientManagementMock.data.splice(foundClientIndex, 1, newClient);

            res.status(200).json({
                message: 'Cliente atualizado com sucesso',
                success: true,
                clientManagement: clientManagementMock
            });
        }
    }

    controller.removeClientManagement = (req, res) => {
        const { clientId } = req.params;
        const foundClientIndex = clientManagementMock.data.findIndex(client => client.id === clientId);

        if (foundClientIndex === -1) {
            res.status(404).json({
                message: 'Cliente não encontrado na base de dados',
                success: false,
                clientManagement: clientManagementMock
            });
        } else {
            clientManagementMock.data.splice(foundClientIndex, 1);
            res.status(200).json({
                message: 'Cliente excluído com sucesso',
                success: true,
                clientManagement: clientManagementMock
            });
        }
    }

    return controller;
}