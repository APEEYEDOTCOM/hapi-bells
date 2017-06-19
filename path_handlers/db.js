'use strict';
const Utils = require('./utilities.js'); //General Utilities to use
const hstatus = require('hapi-status'); //HTTP Status codes 
const Promise = require('bluebird'); //Promises for nodejs
var sqlite3 = require('sqlite3').verbose(); //RDBMS for nodejs
var db;
 
 
function APEEYEUsers(request,reply) {
	const reglocation = request.location;
	var token = request.auth.credentials.token;
	console.log(token)

	if (reglocation) {
	console.log(reglocation);
	} else {
	console.log('Geo Location disabled for this route');
	}
	db = new sqlite3.Database('./db/APEEYEDB.db');
	var sqlResObj = [];
	
		console.log("readAllRows apeusers");
		db.all("SELECT rowid AS id, email, pass  FROM apeusers", function(err, rows) {
			rows.forEach(function (row) {
						 var iRows = {'ID' : row.id, 'Email' : row.email, 'Password': row.pass}	
						 sqlResObj.push(iRows)
			});
			closeDb();
	 
			var reqResponse = {
				'body' : sqlResObj,
				'details' : 'success'
			};
			return hstatus.ok(reply,reqResponse)			
		});
	}
 
	function closeDb() {
		console.log("closeDb");
		db.close();
	}	

exports.APEEYEUsers = APEEYEUsers;





