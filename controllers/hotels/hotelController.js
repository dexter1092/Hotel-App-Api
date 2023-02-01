const bodyParser = require("body-parser");
const { exists } = require("jade/lib/filters");
const sql = require('../../config/dbconn');
const hotelModel = require('../../models/hotels/hotelModel');

function addHotel(req, res) {

	const arrmixHotel = {
		hotel_type: req.body.hotel_type,
		domain: req.body.domain,
		name: req.body.name,
		description: req.body.description,
		lat: req.body.lat,
		long: req.body.long,
		status: req.body.status,
		created_by: req.userData.user_id,
		created_on: new Date(),
		updated_by: req.userData.user_id,
		updated_on: new Date()
	}

	// to declare some path to store your converted image
	// var matches = req.body.picture.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
	// 	response = {};


	// if (matches.length !== 3) {
	// 	return res.status(500).json({
	// 		status: false,
	// 		message: "wrong input string for file"
	// 	});
	// }


	// response.type = matches[1];
	// response.data = Buffer.from(matches[2], 'base64');

	// let decodedImg = response;
	// let imageBuffer = decodedImg.data;
	// let type = decodedImg.type;
	// let extension = mime.extension(type);
	// console.log(extension);
	// let fileName = "image." + extension;
	// console.log(fileName);
	// try {
	// 	fs.writeFileSync("../../images/" + fileName, imageBuffer, 'utf8');
	// 	console.log('success');
	// } catch (error) {
	// 	console.log(error);
	// }

	// exit;

	hotelModel.insert(sql, arrmixHotel, function (err, result) {
		if (err) {
			return res.status(201).json({
				status: false,
				message: err.sqlMessage
			});
		}
		return res.status(200).json({
			success: true,
			data: result,
		});
	});
}

module.exports = {
	addHotel: addHotel
}