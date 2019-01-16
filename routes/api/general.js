const generalController = require('../../controllers/api/general.controller');

module.exports = app => {
   app.route('/api/general/hello').get(generalController.getHello);
};

