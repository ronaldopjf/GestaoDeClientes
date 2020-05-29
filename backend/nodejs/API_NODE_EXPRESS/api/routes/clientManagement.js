module.exports = app => {
    const controller = app.controllers.clientManagement;

    app.route('/api/v1/clientManagement')
        .get(controller.listClientManagement)
        .post(controller.saveClientManagement);

    app.route('/api/v1/clientManagement/:clientId')
        .delete(controller.removeClientManagement)
        .put(controller.updateClientManagement);
}