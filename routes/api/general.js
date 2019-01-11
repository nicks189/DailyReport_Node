const generalController = require('../../controllers/api/generalController');

module.exports = app => {
   app.route('/api/general/hello').get(generalController.getHello);
};

