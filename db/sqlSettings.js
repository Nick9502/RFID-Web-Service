const sql = require('mssql')

var dbconfig = {
	server: "rfid.cwvre1um9ohz.us-west-2.rds.amazonaws.com",
	user: "Admin",
	password: "Arellano18",
	database: "SeniorDB",
	port: 8081,
	options : {
		encrype: false
	}
}

module.exports.dbconfig=dbconfig;
