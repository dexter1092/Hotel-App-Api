const bodyParser 	= require("body-parser");
const { exists } 	= require("jade/lib/filters");
const sql 			= require('../../config/dbconn');
const userModel 	= require('../../models/user/userModel');
const md5 			= require('md5');

function getUsers( req, res ) {
	userModel.getUsers(sql, function (err, result) {
		if (err) {
			return res.status(201).json({
				status: false,
				message: err.sqlMessage
			});
		}
		return res.status(200).json({
			status: true,
			data: result,
		});
	});
}

function addUser(req, res) {

	const arrmixUser = {
		user_type_id	: req.body.user_type_id,
		name 			: req.body.name,
		email_id 		: req.body.email_id,
		password 		: md5(req.body.password ),
		status 			: 1,
		created_by 		: req.userData.user_id,
		created_on		: new Date(),
		updated_by		: req.userData.user_id,
		updated_on		: new Date(),
		picture			: req.body.picture
	}

	console.log(arrmixUser);
	

	userModel.insert(sql, arrmixUser, function (err, result) {
		if (err) {
			console.log(err);
			return res.status(201).json({
				status: false,
				message: err.sqlMessage
			});

		}
		return res.status(200).json({
			status: true,
			data: result,
		});
	});
}

module.exports = {
	getUsers : getUsers,
	addUser  : addUser
}
