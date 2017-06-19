<a href="http://www.apeeye.com/">
<p align="center"><img src="http://www.apeeye.com/ApeEyeLogo5TransSMALL.png"></p>
<h1 align="center">BY APEEYE</h1>
</a>
 
<p align="center">
<a href="https://github.com/APEEYEDOTCOM/hapi-bells/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License"></a>
</p>

# hapi-bells
A Hapi API template with cross cutting concerns baked into the template


* [Introduction](#introduction)
   * [Purpose](#purpose)
   * [Usage](#usage)
   * [What is included in the template?](#what-is-included-in-the-template)
   * [Key Template Folders and Files](#key-template-folders-and-files)
* [Template Features and Examples](#template-features-and-examples)
   * [Documentation](#documentation)
   * [Request and Response Sanitization](#request-and-response-sanitization)
   * [CORS Support](#cors-support)
   * [Performance Measurements](#performance-measurements)
   * [Policies](#policies)
   * [Proxy Filter](#proxy-filter)
   * [Monitoring](#monitoring)
   * [Security and Data Encryption](#security-and-data-encryption)
   * [Storage](#storage)
   * [CRON](#cron)
   * [Configuration](#configuration)
   * [Utilities](#utilities)
   * [SDK Generation](#sdk-generation)
   * [Logging](#logging)
   * [Load Balancing](#load-balancing)
* [License](#license)

## Introduction

### Purpose

We here at APEEYE have been playing around with the hapi.js framework (https://hapijs.com/) for a while now, and absolutely love it. Kudoes to the <a href="https://github.com/orgs/hapijs/people">hapi.js team</a> We set out to create a Hapi template, with some basic features baked into the template, making use of various plugins provided by the community. 

Disclaimer: This template was created by novice developers. We are not claiming this is the absolute best template setup there possibly could be, so feel free to constructively critique it and make suggestions on how to improve it. 

## Usage

### Dependancies
* [node.js](https://nodejs.org/en/) >= v6.10.3
* [npm](https://docs.npmjs.com/getting-started/installing-node) >= v3.10.5
* [pm2](https://github.com/Unitech/pm2) >= v2.4.0 
* [autorest](https://github.com/Azure/autorest) >= v1.1.0

### Installing
With [npm](https://npmjs.org/) installed, run

    $ npm install hapi-bells
    
Then, with [pm2](https://github.com/Unitech/pm2) installed, run

    $ pm2 start startup.json

To access the API Documentation, go to

    $ http://localhost:8082


### What is included in the template? 
Key features included into the template include

* Interactive Documentation
* Request and Response Sanitization
* CORS Support
* Performance Measurement
* Policies
* Proxy Filter
* Monitoring
* Security 
* Data Encryption
* Local Storage
* CRON Jobs
* API Configuration
* Genral Utilities
* SDK Generation 
* Logging
* Load Balancing

### Key Template Folders and Files
* api_server.js - This is the main Hapi server file. In this file you can configure your hapi server and change plugins
* routes.js - This is the hapi server api routes file. In this file you can set up your API paths. 
* startup.json - This file is used by pm2 to start the project. In this file you can configure the number of instances of the API to spin up, specify log file locations and give the API a friendly name which will display when running

      $ pm2 monit
    
* path_handlers folder - This folder contains the handlers for the API paths. One file is used per group of API paths. 
* db folder - This folder contains local storage files, used to store whatever is required by the API. 
* config folder - This folder contains the API configuration JSON file, which can be used to store any configurations the API required. 
* policies folder - This folder contains all the API policies which can be used to decorate the API path with. 
* public folder - This folder contains all the elements of the API that would be publically accessible, like the Swagger UI for example.
* templates folder - This folder contains all the templates required by the API. 

## Template Features and Examples
### Documentation
#### Plugins and Tools used 
* Interactive documentation compliant with the Open API Standard (OAS) - [hapi-swagger](https://github.com/glennjones/hapi-swagger/) by Glen Jones
* Static Client Side SDK Documenttation - [swagger online editor using HTML2 Client](http://editor.swagger.io/#/) by Swagger

#### How it was implemented in the API Template
In the api_server.js javaScript file, the swaggerOptions object is used to configure Swagger. The tags in the swaggerOptions object specifies the top level path names of the API. For each path created, there should be an associated path handler javascript file placed in the path_handlers folder. This path handler file is then included in the routes.js file to access the handler functions. 
For example: The System path specified, would have an associated javascript file systemEndpoints.js located in the path_handlers folder, containing all the functions associated with the system paths. 
 
```Javascript
'use strict';
const Hapi = require('hapi'); //REST API framework
const Inert = require('inert'); //handler methods for static files
const Vision = require('vision'); //decorates req and resp interfaces
const Blipp = require('blipp'); //display routes table on startup in console
const Boom = require('boom'); //http error status codes
const Routes = require('./routes'); //cors support

 
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
		]
};

// register plug-ins
server.register([
    Inert,
    Vision,
    Blipp,
    {
        register: require('hapi-swagger'),
        options: swaggerOptions
    },
    ], function (err) {

        server.start(function(){
            console.log('Server running at:', server.info.uri);
			
        });
    });

 
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

```
As a project may be a mixture of web pages and API endpoints you need to tag the routes you wish Swagger to
document. Simply add the `tags: ['api']` property to the route object for any endpoint you want document.

```Javascript
const systemEndpoints = require('./path_handlers/systemEndpoints.js'); //system path Handlers

module.exports = [
{
    method: 'GET',
    path: '/System/{id}/',
    config: {
        handler: systemEndpoints.testfunction,
        description: 'Get test functikon',
        notes: 'Returns a todo item by the id passed in the path',
        tags: ['api'], // ADD THIS TAG
        validate: {
            params: {
                id : Joi.number()
                        .required()
                        .description('the id for the todo item'),
            }
        }
    },
}];

```

Once you have run the API, a Swagger UI document is generated representing your API structure. A swagger.json object is constructed in the background, and would be accessible at: http://localhost:8082/swagger.json

You can use this swagger.json object to generate associated SDK documentation at http://editor.swagger.io/. 
Import the swagger.json file into the swagger editor, and select Generate Client => html2
This will download a index.html file, which you can copy to your public/docs folder. 

Side note: This SDK documentation process could probably be automated by running an independant swagger codegen instance. 

### Request and Response Sanitization
#### Plugins and Tools used 
* Request query, payload, and params sanitization for Hapi - [disinfect](https://github.com/genediazjr/disinfect) by genediazjr 
* Object schema validation - [joi](https://github.com/hapijs/joi) by hapijs 
* HTTP-friendly error objects - [boom](https://github.com/hapijs/boom) by hapijs 
* Reply to hapi requests with a statusCode and optional headers - [hapi-status](https://github.com/daanvanham/hapi-status) by daanvanham 

#### How it was implemented in the API Template
The disinfect plugin gives the template the ability to implement custom sanitization and per-route configuration. Plugins used in the template, must first be registered in the api_server.js file.  

```Javascript
// register plug-ins
server.register([
    Inert,
    Vision,
    Blipp,
	{
	register: require('disinfect'),
	  options: {
		    disinfectQuery: true,
		    disinfectParams: true,
		    disinfectPayload: true
			}
	},	
    ], function (err) {

        server.start(function(){
            console.log('Server running at:', server.info.uri);
			
        });
    });

```

Once the plugin is registered, it is available to the API routes. 

```Javascript
	{ /*/System/API_Ping/*/
		method: 'GET',
		path: '/System/API_Ping/',
		config: {
		   plugins: {
			disinfect: {
			  disinfectQuery: true,
			  disinfectParams: true,
			  disinfectPayload: true
				}	
			},
	handler:  systemEndpoints.API_Ping,
	description: 'API Heartbeat Monitoring',
	notes : 'Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to check if the API is up and available.',
			tags: ['api']
		},
	}
```
### CORS Support
#### Plugins and Tools used 
* Extension to enable CORS for hapi - [hapi-cors-headers](https://github.com/gr2m/hapi-cors-headers) by gr2m 

#### How it was implemented in the API Template
CORS support has been implemented in the api_server.js file to enables CORS on all server responses, securely from all origins, with access-control-allow-credentials: true. The plugin hapi-cors-headers extends the hapi server to include CORS headers in all responses.  

```Javascript
const corsHeaders = require('hapi-cors-headers');

...

 
//Adds cors support
server.ext('onPreResponse', corsHeaders);

```

### Performance Measurements
#### Plugins and Tools used 
* Response time plugin for hapi - [hapi-response-time](https://github.com/pankajpatel/hapi-response-time) by pankajpatel 

#### How it was implemented in the API Template
The hapi-response-time plugin is registered in the api_server.js file. 

```Javascript
server.register([
    Inert,
    Vision,
    Blipp,
	{
	  register: require('hapi-response-time')
	},
    ], function (err) {

        server.start(function(){
            console.log('Server running at:', server.info.uri);
			
        });
    });
```
This plugin will add following headers to each request. The time represented is in the UNIX/Epoch time.
* x-req-time: The time on which request is received on server
* x-res-end: The time before sending the response
* x-response-time: The difference between above two, i.e. the time taken by server to process the request before sending the response

### Policies
#### Plugins and Tools used 
* Policies for hapi routes - [mrhorse](https://github.com/mark-bradshaw/mrhorse) by mark-bradshaw 

#### How it was implemented in the API Template
Policies are implemented using the mrhorse plugin. The plugin is registered in the api_server.js file. The plugin will load all policy javascipt files located in the policies folder. For example: If this policy file located in the policies folder is named isAdmin.js, then the policy would be identified as isAdmin and loaded on startup of the API server. 

```Javascript
// register plug-ins
server.register([
    Inert,
    Vision,
    Blipp,
	{
	register: require('mrhorse'),
	options: {
		   policyDirectory: __dirname + '/policies'
		} 
	}, 	
    ], function (err) {

        server.start(function(){
            console.log('Server running at:', server.info.uri);
			
        });
    });
```
Policies are just a simple javascript file that exports one javascript function.

```Javascript
var isAdmin = function(request, reply, next) {
   var role = _do_something_to_check_user_role(request);
   if (role && role === 'admin') {
       return next(null, true); // All is well with this request.  Proceed to the next policy or the route handler.
   } else {
       return next(null, false); // This policy is not satisfied.  Return a 403 forbidden.
   }
};

// This is optional.  It will default to 'onPreHandler' unless you use a different defaultApplyPoint.
isAdmin.applyPoint = 'onPreHandler';

module.exports = isAdmin;
```
The policy function must call the next callback and provide a boolean value indicating whether the request can continue on for further processing in the hapi lifecycle [next(null, true)]. If you don't call the next callback, hapi will never respond to the request. It will timeout.

Policies are applied to the routes.js file, on the individual API endpoints. 

```Javascript
server.route({
    method: 'GET',
    path: '/admin',
    handler: function(request, reply) {},
    config: {
        plugins: {
            policies: [
                ['isLoggedIn', 'isAnAdmin'], // Do these two in parallel
                'onlyInUS' // Then run this policy
            ]
        }
    }
});
```

A couple of policies are included in the policies folder: 
* isAdmin - Can be used to tag certain users as administrators of the API. 
* isAudit - Used to audit the request and response, stores the results in the local storage database. 
* isIPBlacklist - Used to restrict access to the API for certain IP addresses
* isIPWhitelist - Used to allow access to the API for certain IP addresses 
* isThrottle - Can be used to throttle API endpoint usage 

### Proxy Filter
#### Plugins and Tools used 
* Plugin for setting the request.info.remoteAddress and request.info.remotePort based on the X-Forwarded-For and X-Forwarded-Port headers - [therealyou](https://github.com/briandela/therealyou) by briandela 

#### How it was implemented in the API Template

### Monitoring
#### Plugins and Tools used 
* Realtime Monitoring solution for hapi - [hapijs-status-monitor](https://github.com/ziyasal/hapijs-status-monitor) by ziyasal

#### How it was implemented in the API Template

### Security and Data Encryption
#### Plugins and Tools used 
* Simple Bearer authentication scheme plugin for hapi - [hapi-auth-bearer-token](https://github.com/johnbrett/hapi-auth-bearer-token) by johnbrett 
* Standard and secure cryptographic algorithms - [crypto](https://github.com/Gozala/crypto) by Gozala 

#### How it was implemented in the API Template

### Storage
#### Plugins and Tools used 
* Asynchronous, non-blocking SQLite3 bindings for Node.js to store token and user information - [node-sqlite3](https://github.com/mapbox/node-sqlite3) by mapbox 

#### How it was implemented in the API Template

### CRON
#### Plugins and Tools used 
* A hapi plugin to setup cron jobs - [hapi-cron](https://github.com/antonsamper/hapi-cron) by antonsamper 

#### How it was implemented in the API Template

### Configuration 
#### Plugins and Tools used 
* Hierarchical configurations for your app deployments - [config](https://github.com/lorenwest/node-config) by lorenwest 

#### How it was implemented in the API Template

### Utilities
#### Plugins and Tools used 
* Full featured promise library - [bluebird](https://github.com/petkaantonov/bluebird ) by petkaantonov 
* Simplest way possible to make http calls - [request](https://github.com/request/request ) by request 
* A hapi plugin to geo locate requests - [hapi-geo-locate](https://github.com/fs-opensource/hapi-geo-locate) by futurestud.io 
* Simple server-side session support for hapi - [hapi-server-session](https://github.com/btmorex/hapi-server-session) by btmorex 
* User-agent information plugin for hapi - [scooter](https://github.com/hapijs/scooter) by hapijs 
* Async utilities for node - [async](https://github.com/caolan/async) by caolan 
* Simple, fast generation of RFC4122 UUIDS - [node-uuid](https://github.com/kelektiv/node-uuid) by kelektiv 

#### How it was implemented in the API Template

### SDK Generation
#### Plugins and Tools used 
* SDK Generation through Swagger (OpenAPI) Specification code generator featuring C# and Razor templates. Supports C#, Java, Node.js, TypeScript, Python and Ruby - [autorest](https://github.com/Azure/autorest) by Azure 

#### How it was implemented in the API Template

### Logging
#### Plugins and Tools used 
* Logging capabilities provided by [pm2](https://github.com/Unitech/pm2) by keymetrics 

#### How it was implemented in the API Template

### Load Balancing
#### Plugins and Tools used 
* Load Balancing capabilities provided by [pm2](https://github.com/Unitech/pm2) by keymetrics 

#### How it was implemented in the API Template





