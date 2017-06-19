'use strict';
const Hapi = require('hapi'); //REST API framework
const Inert = require('inert'); //handler methods for static files
const Vision = require('vision'); //decorates req and resp interfaces
const Blipp = require('blipp'); //display routes table on startup in console
const Boom = require('boom'); //http error status codes
const Routes = require('./routes'); //cors support
const corsHeaders = require('hapi-cors-headers');
const Scooter = require('scooter'); //user agent info
const fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var db;
 
const  server = new Hapi.Server();
server.connection({
    host: (process.env.HOST || 'localhost'),
    port: (process.env.PORT || 8082),
    routes: { cors: true }
});

// setup swagger options
const swaggerOptions = {
    info: {
        version: '1',
        title: 'MASTER TEMPLATE',
        description: 'Master API Teplate with cross cutting concerns baked into the template.'
    },
    tags: [
			{
			'name': 'System',
			'description': 'Internal Operations',
			'externalDocs': {
				'description': 'Find out more',
				'url': 'http://www.apeeye.com'
				}
			}, 
			{
			'name': 'User',
			'description': 'Consumer Operations',
			'externalDocs': {
				'description': 'Find out more',
				'url': 'http://www.apeeye.com'
				}
			}, 
			{
			'name': 'TestCases',
			'description': 'Verification',
			'externalDocs': {
				'description': 'Find out more',
				'url': 'http://www.apeeye.com'
				}
			}
		],
	securityDefinitions: {
        'Bearer': {
            'type': 'apiKey',
            'name': 'Authorization',
            'in': 'header',
            'x-keyPrefix': 'Bearer '
        }
    },
    security: [{ 'Bearer': [] }]
};

// register plug-ins
server.register([
    Inert,
    Vision,
    Blipp,
	Scooter,
    {
        register: require('hapi-swagger'),
        options: swaggerOptions
    },
	{
		    register: require('disinfect'),
			options: {
				disinfectQuery: true,
				disinfectParams: true,
				disinfectPayload: true
			}
	},
	{
		    register: require('hapi-geo-locate'),
			    options: {
					enabledByDefault: false
				}
	},
	{
			register: require('hapi-response-time')
	},
	{
		register: require('mrhorse'),
		options: {
			policyDirectory: __dirname + '/policies'
		} 
	}, 
	{
		register: require('therealyou')
	},
	{
	  register: require('hapijs-status-monitor'),
	  options: {
		title: 'API Status Monitor',
		routeConfig: {
		  auth: false
		}
	}},
	{
	 register: require('hapi-auth-bearer-token') 
	},
	{
		register: require('hapi-cron'),
		options: {
			 jobs: [{
				name: 'testcron',
				time: '59 * * * * * ',
				timezone: 'Africa/Johannesburg',
				request: {
					headers: {'Authorization': 'Bearer d294b4b6-4d65-4ed8-808e-26954168ff48'},
					method: 'GET',
					url: 'http://localhost:8082/System/API_Ping/'
				},
				callback: (res) => {
					console.log(res.result)
					console.info('testcron has run!');
				}
			}] 
		}
	},
	{
	  register: require('hapi-server-session'),
	  options: {
		cache : {
		 expiresIn: 100000	
		},  
		cookie: {
		  isSecure: false,
		},
	  },
	},	
    ], function (err) {

        server.start(function(){
            console.log('Server running at:', server.info.uri);
			
        });
    });

		// Create a validation function for strategy
	var validate = function (token, callback) {
	var fulltoken = 'Bearer ' + token;	
	console.log('Received Token is: ' + token)

	db = new sqlite3.Database('./db/APEEYEDB.db');	
	  var params = [fulltoken]; 
	  var select = 'select * from apeusers where btoken = ?';
	 
	  db.all(select,params, function (err, rows) {
		if(err){
			console.log('ERROR on db read')
			console.log(err);
				console.log('Token Valid');
				callback(null, true, { token: token })
		}else{
			 var reqResponse ;
			console.log('no error on db read')
			console.log(rows.length) 
			console.log(rows) 
		   if (rows.length <= 0){
				 reqResponse = {
				'body' : reqResponse,
				'details' : 'failure'
				}	
				console.log('Token Invalid');
				callback(null, false)				
		   } else {
				 reqResponse = {
				'body' : {'TokenType': 'Bearer', 'Token': rows[0].btoken, 'IncludeInRequestHeader': 'Authorization: ' + rows[0].btoken},
				'details' : 'success'
				}
				console.log(reqResponse);
				callback(null, true, { token: token })				
		   }	
 
		}
	  });
	db.close()		
 
	};
	 server.auth.strategy('simple', 'bearer-access-token', {
			validateFunc: validate
		});
 
 
//Adds cors support
server.ext('onPreResponse', corsHeaders);
// add routes
server.route(Routes);

// add templates support with handlebars
server.views({
    path: 'templates',
    engines: { html: require('handlebars') },
    partialsPath: './templates/withPartials',
    helpersPath: './templates/helpers',
    isCached: false
})



