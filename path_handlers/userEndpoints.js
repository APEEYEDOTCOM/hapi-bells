'use strict';
const Utils = require('./utilities.js');
const hstatus = require('hapi-status'); //HTTP Status codes 
const Promise = require('bluebird'); //Promises for nodejs
var sqlite3 = require('sqlite3').verbose();
var db;

function Register(request, reply) {
	var email = request.payload.email;
	var pass = request.payload.password;
	var toEncrypt = email + ' ' + pass;

	db = new sqlite3.Database('./db/APEEYEDB.db');	
  var params = [email, pass]; 
  var select = 'select rowid AS id, email, pass from apeusers where email = ? and pass = ?';
 
  db.all(select,params, function (err, rows) {
    if(err){
		console.log('ERROR on db read')
        console.log(err);
    } else {
		 var reqResponse ;
		console.log('no error on db read')
        console.log(rows) 
	   if (rows.length){
         reqResponse = {
		'body' : {'AccountStatus': 'Account Already Exists'},
		'details' : 'failure'
		}
	   } else {
		    var timeInMs = Date.now();
			var enc = Utils.encrypt(email + ' ' + pass + ' ' + timeInMs);

		   //create new account and issue bearer token
		 
		 	  var stmt = db.prepare("INSERT INTO apeusers VALUES (?, ?, ?)");
			  stmt.run(email, pass, 'Bearer ' + enc);
			  stmt.finalize();
			  
         reqResponse = {
		'body' : {'AccountStatus': 'New Account Created', 'TokenType': 'Bearer', 'Token': enc, 'IncludeInRequestHeader': 'Authorization: Bearer ' + enc},
		'details' : 'success'
		}			   
	   }	
	return hstatus.ok(reply,reqResponse);
    }
  });
	db.close() 
}

function RetrieveToken(request, reply) {
	var email = request.payload.email;
	var pass = request.payload.password;

	db = new sqlite3.Database('./db/APEEYEDB.db');	
  var params = [email, pass]; 
  var select = 'select btoken from apeusers where email = ? and pass = ?';
 
  db.all(select,params, function (err, rows) {
    if(err){
		console.log('ERROR on db read')
        console.log(err);
    }else{
		 var reqResponse ;
		console.log('no error on db read')
        console.log(rows.length) 
		console.log(rows) 
	   if (rows.length <= 0){
			 reqResponse = {
			'body' : {'User': 'Account Details Incorrect'},
			'details' : 'failure'
			}		   
	   } else {
			 reqResponse = {
			'body' : {'TokenType': 'Bearer', 'Token': rows[0].btoken, 'IncludeInRequestHeader': 'Authorization: ' + rows[0].btoken},
			'details' : 'success'
			}			   
	   }	

	return hstatus.ok(reply,reqResponse);
    }
  });
	db.close() 
}

function RefreshToken(request, reply) {
	var email = request.payload.email;
	var pass = request.payload.password;
	var timeInMs = Date.now();
	var enc = Utils.encrypt(email + ' ' + pass + ' ' + timeInMs);
	
	db = new sqlite3.Database('./db/APEEYEDB.db');	
  var params = [email, pass]; 
  var select = 'select btoken from apeusers where email = ? and pass = ?';
 
  db.all(select,params, function (err, rows) {
    if(err){
		console.log('ERROR on db read')
        console.log(err);
    }else{
		 var reqResponse ;
		console.log('no error on db read')
        console.log(rows.length) 
		console.log(rows) 
	   if (rows.length <= 0){
			 reqResponse = {
			'body' : {'User': 'Account Details Incorrect'},
			'details' : 'failure'
			}		   
	   } else {
			 var newToken = 'Bearer ' + enc;
		     db.run("UPDATE apeusers SET btoken = ? WHERE email = ? and pass = ?", newToken, email, pass);
			 
			 reqResponse = {
			'body' : {'TokenType': 'Bearer', 'Token': newToken, 'IncludeInRequestHeader': 'Authorization: ' + newToken},
			'details' : 'success'
			}			   
	   }	

	return hstatus.ok(reply,reqResponse);
    }
  });
	db.close() 
}
 
function RequestAuditTrail(request, reply) {
	var email = request.payload.email;
	var pass = request.payload.password;

	db = new sqlite3.Database('./db/APEEYEAUDIT.db');	
   var params = [email]; 
   var select = 'select * from APEEEYEAudit where email = ? limit 100';
  
  db.all(select,params, function (err, rows) {
    if(err){
		console.log('ERROR on db read')
        console.log(err);
    }else{
		 var reqResponse ;
		console.log('no error on db read')
        console.log(rows.length) 
		console.log(rows) 
	   if (rows.length <= 0){
			 reqResponse = {
			'body' : {'User': 'Account Details Incorrect'},
			'details' : 'failure'
			}		   
	   } else {
			 reqResponse = {
			'body' : {'AuditRecords': rows},
			'details' : 'success'
			}			   
	   }	

	return hstatus.ok(reply,reqResponse);
    } 
  });
	db.close() 
} 
 
 
exports.Register = Register;
exports.RetrieveToken = RetrieveToken;
exports.RefreshToken = RefreshToken;
exports.RequestAuditTrail = RequestAuditTrail





