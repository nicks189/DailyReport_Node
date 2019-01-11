const userController = require('../../controllers/api/userController');

module.exports = app => {
    app.route('/api/user/add').post(userController.add);
};