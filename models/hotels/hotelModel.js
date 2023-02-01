
// constructor
const Hotel = function (hotel) {
	this.hotel_type = hotel.hotel_type;
	this.domain = hotel.domain;
	this.name = hotel.name;
	this.description = hotel.description;
	this.lat = hotel.lat;
	this.long = hotel.long;
	this.status = hotel.status;
	this.created_by = hotel.created_by;
	this.created_on = hotel.created_on;
	this.updated_by = hotel.updated_by;
	this.updated_on = hotel.updated_on;

};
Hotel.insert = (sql, hotel, result) => {
	sql.query("INSERT INTO hotels SET ?", hotel, (err, res) => {
		if (err) {
			return result(err, null);
		}
		return result(null, { id: res.insertId, ...hotel });
	});
};


module.exports = Hotel;