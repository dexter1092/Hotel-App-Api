var express = require('express');
var router = express.Router();

const authenticationController = require('../../controllers/authentication/authenticationContoller');

router.post('/login', authenticationController.login);


module.exports = router;