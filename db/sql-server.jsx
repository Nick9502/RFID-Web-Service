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
function getScans() {
var conn = new sql.ConnectionPool(dbconfig);
	conn.connect((err) => {
		if (err) throw err;
		var req = new sql.Request(conn);
		req.query("select * from Container", (err, record) => {
			if (err) throw err;
			else {
				console.log(record);
			}
			conn.close(); // Close connection
		});
	})
}
function getScansByContainerId(containerId) {
	var conn = new sql.ConnectionPool(dbconfig);
		conn.connect((err) => {
			if (err) throw err;
			var req = new sql.Request(conn);
			req.query(`select * from Container where Container_Id=${containerId}`, (err, record) => {
				if (err) throw err;
				else {
					console.log(record);
				}
				conn.close(); // Close connection
			});
		})
	}

function updateDescription() {
	var conn = new sql.ConnectionPool(dbconfig);
		conn.connect((err) => {
			if (err) throw err;
			var req = new sql.Request(conn);
			//request.input('desc', sql.NVarChar, value)
			myquery= "UPDATE Container SET Description='Container I',Weight='20',Container_Price='64.75',Active='1' WHERE Id=12 "; 
			//myquery= "UPDATE Container SET Description= " +desc+ " WHERE Id= " +id; 
			req.query(myquery, (err, record) => {
				if (err) throw err;
				else {
					console.log(record);
				}
				conn.close(); // Close connection
			});
		})
	}

//getScans();
updateDescription();

module.exports = {sql}
exports.dbconfig=dbconfig;