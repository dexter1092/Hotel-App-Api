const sql = require('../../config/dbconn');
const md5 = require('md5');
const jwt = require("jsonwebtoken");
const User = require('../../models/user/userModel');

function login(req, res) {
	User.findByEmail(req.body.email_id, sql, function (err, result) {
		if (err) {
			res.status(500).json({
				status: false,
				message: err.message,
			});
		}

		if (false == checklength(req, res, result)
			|| false == validatePassword(req, res, result)) {
			return false;
		}

		createToken(req, res, result, function (err, token) {
			if (err) {
				res.status(500).json({
					status: false,
					message: err.message,
				});
			}

			res.status(200).json({
				status: true,
				data: result[0],
				token:token
			});
		});
	});
}

function checklength(req, res, result) {
	if (0 == result.length) {
		res.status(404).json({
			status: false,
			message: 'Invalid Credendtials',
		});
		return false;
	}
	return true;
}

createToken = (req, res, result, callback) => {
	try {
		token = jwt.sign(
			{
				user_id: result[0].id,
				email_id: result[0].email_id,
				name: result[0].name,
				status: result[0].status,
				user_type_id: result[0].user_type_id,
				updated_on: result[0].updated_on,
				created_on: result[0].created_on
							},
			process.env.SECRET_KEY,
			{ expiresIn: "1h" }
		);
		return callback(null, token);
	} catch (error) {
		return callback({ message: 'Someting Went Wrong !!!' }, null);
	}
}

function validatePassword(req, res, result) {
	if (result[0].password !== md5(req.body.password)) {
		res.status(404).json({
			status: false,
			message: 'Invalid Credendtials',
		});

		return false;
	}
	return true;
}

module.exports = {
	login: login
}