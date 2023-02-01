var express = require('express');
var router = express.Router();

const checkAuthMiddleware = require('../../middleware/check-auth');

const userController = require('../../controllers/users/userController');

router.get('/getusers', checkAuthMiddleware.checkAuth, userController.getUsers);
router.post('/add-user', checkAuthMiddleware.checkAuth, userController.addUser);

module.exports = router;