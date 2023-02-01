var express = require('express');
var router = express.Router();

const checkAuthMiddleware = require('../../middleware/check-auth');

const hotelController = require('../../controllers/hotels/hotelController');

router.post('/addhotel', checkAuthMiddleware.checkAuth, hotelController.addHotel);

module.exports = router;