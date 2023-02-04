// constructor
const User = function (user) {
	this.name = user.name;
	this.email_id = user.email_id;
	this.password = user.password;
	this.user_type_id = user.user_type_id;
	this.status = user.status;
	this.created_on = user.created_on;
	this.updated_on = user.updated_on;
	this.created_by = user.created_by;
	this.updated_by = Date.now();
	this.picture = user.picture;
};

User.findByEmail = (email_id, sql, result) => {
	sql.query("select * from users where email_id = ?", [email_id], (err, res) => {
		if (err) {
			return result({ message: err.sqlMessage }, null);
		}

		return result(null, res);
	});
}

User.getUsers = ( sql, result) => {
	sql.query("SELECT u.id, u.name, u.name, u.email_id,u.status,u.created_on,u.created_by,u.updated_on,u.updated_by, u.picture ,ut.name as user_type_name FROM users u JOIN user_types ut ON (ut.id = u.user_type_id)", 
		(err, res) => {
		if (err) {
			return result({ message: err.sqlMessage }, null);
		}

		return result(null, res);
	});
}

User.insert = (sql, hotel, result) => {
	sql.query("INSERT INTO users SET ?", hotel, (err, res) => {
		if (err) {
			return result(err, null);
		}
		return result(null, { id: res.insertId, ...hotel });
	});
};

module.exports = User;
