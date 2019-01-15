const userController = require('../../controllers/api/user.controller');

module.exports = app => {
    app.route('/api/user/add').post(userController.add);
    app.route('/api/user/fetch/:email').get(userController.fetch);
    app.route('/api/user/update/:email').put(userController.update);
};