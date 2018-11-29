var express = require('express');
var bodyParser = require('body-parser');
const mssql = require('../db/sqlSettings')
const sql = require('mssql')
const cors = require('cors')
var app = express();

app.use(bodyParser.json());

app.get('/containers',cors(), (req,res) => {
	sql.connect(mssql.dbconfig).then(pool => {
		return pool.request()
		.query('select * from Container')
	}).then(result => {
		res.send(result.recordset)
		sql.close();
	});
});

app.get('/containers/:container',cors(), (req,res) => {
	var containerId  = req.params.container;
	sql.connect(mssql.dbconfig).then(pool => {
		return pool.request()
		.query(`select * from Container WHERE Container_Id ='${containerId}'`)
	}).then(result => {
		res.send(result.recordset)
		sql.close();
	});
	
});
	


app.listen(3000, () => {
	console.log('Started on port 3000');
});

module.exports = {app};