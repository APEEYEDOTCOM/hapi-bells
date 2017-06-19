'use strict';
const Utils = require('./utilities.js');
const sdks = require('../public/sdks/zip.js');
const hstatus = require('hapi-status'); //HTTP Status codes 
const cmd = require('node-cmd');  //Exec commands on OS
const Promise = require('bluebird'); //Promises for nodejs
const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd }) //Overlay cmd with promises

function UserAgent(request, reply) {
    var connection = request.connection;
    var data = {
       'request.headers.host': request.headers.host,
       'x-forwarded-host': request.headers['x-forwarded-host'],
       'disguised-host': request.headers['disguised-host']
    }
    data['connection.info'] = connection.info.host;
    if (connection.info.port) {
        data['connection.info'] += ':' + connection.info.port;
    }
		var reqResponse = {
		'body' : request.plugins.scooter.toJSON(),
		'details' : 'success'
	};
	return hstatus.unauthorized(reply,reqResponse);	
}

function API_Ping(request,reply) {
	request.session.views = request.session.views + 1 || 1;
	const reglocation = request.location;

	if (reglocation) {
	console.log(reglocation);
	} else {
	console.log('Geo Location disabled for this route');
	}
 
	var reqResponse = {
		'body' : 'pong',
		'details' : 'success'
	};
	return hstatus.ok(reply,reqResponse)	
}

function GenerateSDK(request,reply) {
	const reglocation = request.location;
	if (reglocation) {
	console.log(reglocation);
	} else {
	console.log('Geo Location disabled for this route');
	}
	var swaggerURL = request.params.swaggerJSONurl;
	var lang = request.params.language;
	var namesp = request.params.namespace;
	 
	var genSDK = sdks.GenerateSDK(swaggerURL,lang,namesp); 
	
	var reqResponse = {
		'body' : 'Success. Busy Generating.',
		'details' : 'Request received. SDKs will be ready in 3mins and can be downloaded by clicking the relevant logo below.'
	};
	return hstatus.ok(reply,reqResponse)	
} 

function SimpleCMD(request,reply) {
    cmd.get(
        'C:\\apitemplate\\path_handlers\\simple.cmd',
        function(err, data, stderr){
			if (err) {
					var reqResponse = {
						'body' : err,
						'details' : 'error'
					};				
				return hstatus.seeOther(reply,reqResponse)
			 } else {
					var reqResponse = {
						'body' : data,
						'details' : 'success'
					};
				return hstatus.ok(reply,reqResponse)
			}
        }
    );
}

function APIRestart(request,reply) {
    cmd.get(
        'C:\\apitemplate\\path_handlers\\restart.cmd',
        function(err, data, stderr){
			if (err) {
					var reqResponse = {
						'body' : err,
						'details' : 'error'
					};				
				return hstatus.seeOther(reply,reqResponse)
			 } else {
					var reqResponse = {
						'body' : data,
						'details' : 'success'
					};
				return hstatus.ok(reply,reqResponse)
			}
        }
    );
}
 
exports.UserAgent = UserAgent;
exports.API_Ping = API_Ping;
exports.SimpleCMD = SimpleCMD;
exports.APIRestart = APIRestart;
exports.GenerateSDK = GenerateSDK;





