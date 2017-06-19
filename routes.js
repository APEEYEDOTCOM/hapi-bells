'use strict';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//NPM Packages used in API
const PromiseA = require('bluebird'); //Promises on all requests
const Joi = require('joi'); //Object validation framework
const Handlers = require('./path_handlers/roothandlers.js'); //Hapi Handlers
const systemEndpoints = require('./path_handlers/systemEndpoints.js'); //system path Handlers
const userEndpoints = require('./path_handlers/userEndpoints.js'); //user path Handlers
const dbEndpoints = require('./path_handlers/db.js'); //Hapi Handlers
const https = PromiseA.promisifyAll(require('request')); //HTTP Request Lib including promises
const fs = require("fs"); //File system access
const async = require("async"); //enable async processing and flow control
const config = require('config'); //solution configurations goes in this file 
const hstatus = require('hapi-status'); //HTTP Status codes 
//END NPM Package includes
 
//Required for AI FaceAttributes
const newUser = Joi.object({
		email : Joi.string().min(50).max(50).required().description('Assigned Client API Key.'),
		password : Joi.string().max(200).required().description('Filename of the uploaded Document containing face')
}).label('newUser').description('JSON Body for newUser Schema');
// END Swagger Object Models defined 
 
module.exports = [
	{ /*Root Path*/
		method : 'GET',
		path : '/',
		config : {
			handler : Handlers.index
		}
	},
	{ /*Root Path*/
		method : 'GET',
		path : '/{path*}',
		handler : {
			directory : {
				path : './public',
				listing : false,
				index : true
			}
		}
	},
	{ /*/System/API_Ping/*/
		method: 'GET',
		path: '/System/API_Ping/',
		config: {
		   plugins: {
				disinfect: {
					disinfectQuery: true,
					disinfectParams: true,
					disinfectPayload: true
				},
				'hapi-geo-locate': {
					enabled: false
				},
					policies: ['isAdmin', 'isIPWhitelist', 'isThrottle', 'isIPBlacklist']
			},
			handler:  systemEndpoints.API_Ping,
			description: 'API Heartbeat Monitoring',
			notes : 'Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to check if the API is up and available.',
			tags: ['api']
		},
	},
	{ /*/System/GenerateSDK/*/
		method: 'GET',
		path: '/System/GenerateSDK/{swaggerJSONurl}/{language}/{namespace}',
		config: {
		   auth: {strategies:['simple']},
		   plugins: {
				disinfect: {
					disinfectQuery: true,
					disinfectParams: true,
					disinfectPayload: true
				},
				'hapi-geo-locate': {
					enabled: false
				},
					policies: ['isAdmin', 'isIPWhitelist', 'isThrottle', 'isIPBlacklist']
			},
			handler:  systemEndpoints.GenerateSDK, 
			description: 'Generate API SDK',
			notes : 'Endpoint used for the generation of API Software Development Kits',
			tags: ['api'],  
			validate: {
				params: {
					swaggerJSONurl: Joi.string().required().trim().description('Url path to swagger.json file'),
					language: Joi.string().required().valid(['csharp', 'go', 'java', 'nodejs', 'python', 'ruby']).trim().description('Development language to generate SDK for.'),
					namespace: Joi.string().required().trim().description('User selected namespace')
				}
			}
		},
	},
	{ /*/System/Session/*/
		method: 'GET',
		path: '/System/Session/',
		config: {
		   auth: {strategies:['simple']},
		   plugins: {
				disinfect: {
					disinfectQuery: true,
					disinfectParams: true,
					disinfectPayload: true
				},
				'hapi-geo-locate': {
					enabled: false
				},
					policies: ['isAdmin', 'isIPWhitelist', 'isThrottle', 'isIPBlacklist']
			},
		    handler: function (request, reply) {
					var reqResponse = {
						'body' : request.session,
						'details' : 'success'
					};
				return hstatus.ok(reply,reqResponse)			 
			  
		    },
			description: 'API Session Information',
			notes : 'Endpoint used tp retrieve information stored in the API Session',
			tags: ['api'],  
		},
	},
	{ /*/System/UserAgent/*/
		method: 'GET',
		path: '/System/UserAgent/',
		config: {
		   auth: {strategies:['simple']},
		   plugins: {
				disinfect: {
					disinfectQuery: true,
					disinfectParams: true,
					disinfectPayload: true
				},
				'hapi-geo-locate': {
					enabled: false
				},
					policies: ['isAdmin', 'isIPWhitelist', 'isThrottle', 'isIPBlacklist', 'isAudit']
			},
			handler:  systemEndpoints.UserAgent,
			description: 'Consumer User Agent Information',
			notes : 'Endpoint used to return the Consumer User Agent Information.',
			tags: ['api'],  
			/*validate: { 
				params: {
					API_Key : Joi.string().required().description('Client API Key'),
				}
			}*/
		},
	},
	{ /*/System/API_Restart/*/
		method: 'GET',
		path: '/System/API_Restart/',
		config: {
		   plugins: {
				disinfect: {
					disinfectQuery: true,
					disinfectParams: true,
					disinfectPayload: true
				},
				'hapi-geo-locate': {
					enabled: false
				},
					policies: ['isAdmin', 'isIPWhitelist', 'isThrottle', 'isIPBlacklist']
			},
			handler:  systemEndpoints.APIRestart,
			description: 'API Restart',
			notes : 'Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to check if the API is up and available.',
			tags: ['api']
		},
	},
	{ /*/User/RegisterAccountToReceiveToken/*/
		method: 'POST',
		path: '/User/RegisterAccountToReceiveToken/',
		config: {
		   plugins: {
				disinfect: {
					disinfectQuery: true,
					disinfectParams: true,
					disinfectPayload: true
				},
				'hapi-geo-locate': {
					enabled: false
				},
					policies: ['isAdmin', 'isIPWhitelist', 'isThrottle', 'isIPBlacklist']
			},
			handler:  userEndpoints.Register,
			description: 'Step 1. Create a user account.',
			notes : 'Step 1. Create a new user account to allow API interaction.',
			tags: ['api'],  
			validate: {
				payload : {
						email : Joi.string().max(50).required().description('User email account.'),
						password : Joi.string().max(200).required().description('User password')
				}
			}
		},
	},
	{ /*/User/RetrieveTokenForUserAccount/*/
		method: 'POST',
		path: '/User/RetrieveTokenForUserAccount/',
		config: {
		   plugins: {
				disinfect: {
					disinfectQuery: true,
					disinfectParams: true,
					disinfectPayload: true
				},
				'hapi-geo-locate': {
					enabled: false
				},
					policies: ['isAdmin', 'isIPWhitelist', 'isThrottle', 'isIPBlacklist', 'isAudit']
			},
			handler:  userEndpoints.RetrieveToken,
			description: 'Step 2. Retrieve user account bearer token.',
			notes : 'Step 2. Return the bearer token associated with the user account.',
			tags: ['api'],  
			validate: {
				payload : {
						email : Joi.string().max(50).required().description('User email account.'),
						password : Joi.string().max(200).required().description('User password')
				}
			}
		},
	},
	{ /*/User/RefreshTokenForUserAccount/*/
		method: 'POST',
		path: '/User/RefreshTokenForUserAccount/',
		config: {
		   auth: {strategies:['simple']},
		   plugins: {
				disinfect: {
					disinfectQuery: true,
					disinfectParams: true,
					disinfectPayload: true
				},
				'hapi-geo-locate': {
					enabled: false
				},
					policies: ['isAdmin', 'isIPWhitelist', 'isThrottle', 'isIPBlacklist', 'isAudit']
			},
			handler:  userEndpoints.RefreshToken,
			description: 'Step 3. Create new user account bearer token.',
			notes : 'Step 3. Create a new bearer token associated with the user account.',
			tags: ['api'],  
			validate: {
				payload : {
						email : Joi.string().max(50).required().description('User email account.'),
						password : Joi.string().max(200).required().description('User password')
				}
			}
		},
	},
	{ /*/User/RequestAuditTrail/*/
		method: 'POST',
		path: '/User/RequestAuditTrail/',
		config: {
		   auth: {strategies:['simple']},
		   plugins: {
				disinfect: {
					disinfectQuery: true,
					disinfectParams: true,
					disinfectPayload: true
				},
				'hapi-geo-locate': {
					enabled: false
				},
					policies: ['isAdmin', 'isIPWhitelist', 'isThrottle', 'isIPBlacklist']
			},
			handler:  userEndpoints.RequestAuditTrail,
			description: 'Step 4. Return Audit Trail.',
			notes : 'Step 4. Return the History Audit Trail for the consumer.',
			tags: ['api'],  
			validate: {
				payload : {
						email : Joi.string().max(50).required().description('User email account.'),
						password : Joi.string().max(200).required().description('User password')
				}
			}
		},
	}	
];


 

