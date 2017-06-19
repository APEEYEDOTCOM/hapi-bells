const Boom = require('boom');
var config = require('config');
const configThreshold = config.get('THRESHOLD.REQUESTS');
const Utils = require('../path_handlers/utilities.js');
var sqlite3 = require('sqlite3').verbose();
var db;
var db2; 

var isAudit = function(request, reply, next) {
  var sEmail = '';
  var sMethod =''; 
  var reqInput =''; 
  var resOutput = ''; 
  var reqtoken = request.headers.authorization;
  var sVerb = request.route.method;
  var sHost = request.info.referrer;
  var sDateTime = request.info.received; 
  var sStatusCode = request.response.statusCode;
  var timeInMs = Date.now()
  var checkObj = Utils.isObjEmpty(request.params);
 
  if(!checkObj) {
	reqInput = request.params  
  } else {
	reqInput = request.payload 
  }
  reqInput = JSON.stringify(reqInput);
  resOutput = request.response.source;
  resOutput = JSON.stringify(resOutput);		
  sMethod = request.route.path;
  
  //Get account assocaited with token 
  	db = new sqlite3.Database('./db/APEEYEAUDIT.db');	
	db2 = new sqlite3.Database('./db/APEEYEDB.db');
	  var params = [reqtoken]; 
	  var select = 'select * from apeusers where btoken = ?';
	 
	  db2.all(select,params, function (err, rows) {
		if(err){
			console.log('ERROR on db read')
			console.log(err);
		}else{
			 var reqResponse ;
 
		   if (rows.length <= 0){
			sEmail = 'No Account';
 				
		   } else {
			sEmail = rows[0].email;	
		 	var stmt = db.prepare("INSERT INTO APEEEYEAudit VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
			  stmt.run(timeInMs, sDateTime, sHost, sMethod, sVerb, sStatusCode, sEmail, reqInput, resOutput);
			  stmt.finalize();	
			  console.log('Endpoint Audting Complete.')
              db.close(); 			  
		   }	
		}
	  });
	
	db2.close()

 
 return next(null, true); // All is well with this request.  Proceed to the next policy or the route handler.
};

// This is optional.  It will default to 'onPreHandler' unless you use a different defaultApplyPoint.
/*
Other 'applyPoint' are:
'onRequest'
'onPreAuth'
'onPostAuth'
'onPreHandler'
'onPostHandler'
'onPreResponse'
*/
isAudit.applyPoint = 'onPostHandler';

module.exports = isAudit;