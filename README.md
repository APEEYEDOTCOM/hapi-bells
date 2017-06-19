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
   * [What is included in the template?](#what-is-included-in-the-template)
* [Usage](#usage)
* [License](#license)

## Introduction

### Purpose

We here at APEEYE have been playing around with the hapi.js framework (https://hapijs.com/) for a while now, and absolutely love it. Kudoes to the <a href="https://github.com/orgs/hapijs/people">hapi.js team</a> We set out to create a Hapi template, with some basic features baked into the template, making use of various plugins provided by the community. 

Disclaimer: This template was created by novice developers. We are not claiming this is the absolute best template setup there possibly could be, so feel free to constructively critique it and make suggestions on how to improve it. 

### What is included in the template? 
#### Documentation
* Interactive documentation compliant with the Open API Standard (OAS) - [hapi-swagger](https://github.com/glennjones/hapi-swagger/) by Glen Jones
* Static Client Side SDK Documenttation - [swagger online editor](http://editor.swagger.io/#/) by Swagger

#### Request and Response Sanitization
* Object schema validation - [joi](https://github.com/hapijs/joi) by hapijs 
* Request query, payload, and params sanitization for Hapi - [disinfect](https://github.com/genediazjr/disinfect) by genediazjr 
* HTTP-friendly error objects - [boom](https://github.com/hapijs/boom) by hapijs 
* Reply to hapi requests with a statusCode and optional headers - [hapi-status](https://github.com/daanvanham/hapi-status) by daanvanham 

#### CORS Support
* Extension to enable CORS for hapi - [hapi-cors-headers](https://github.com/gr2m/hapi-cors-headers) by gr2m 

#### Performance Measurements
* Response time plugin for hapi - [hapi-response-time](https://github.com/pankajpatel/hapi-response-time) by pankajpatel 

#### Policies
* Policies for hapi routes - [mrhorse](https://github.com/mark-bradshaw/mrhorse) by mark-bradshaw 

#### Proxies
* Plugin for setting the request.info.remoteAddress and request.info.remotePort based on the X-Forwarded-For and X-Forwarded-Port headers - [therealyou](https://github.com/briandela/therealyou) by briandela 

#### Monitoring
* Realtime Monitoring solution for hapi - [hapijs-status-monitor](https://github.com/ziyasal/hapijs-status-monitor) by ziyasal

#### Security and Data Encryption
* Simple Bearer authentication scheme plugin for hapi - [hapi-auth-bearer-token](https://github.com/johnbrett/hapi-auth-bearer-token) by johnbrett 
* Standard and secure cryptographic algorithms - [crypto](https://github.com/Gozala/crypto) by Gozala 

#### Storage
* Asynchronous, non-blocking SQLite3 bindings for Node.js to store token and user information - [node-sqlite3](https://github.com/mapbox/node-sqlite3) by mapbox 

#### CRON
* A hapi plugin to setup cron jobs - [hapi-cron](https://github.com/antonsamper/hapi-cron) by antonsamper 

#### Configuration 
* Hierarchical configurations for your app deployments - [config](https://github.com/lorenwest/node-config) by lorenwest 

#### Utilities
* Full featured promise library - [bluebird](https://github.com/petkaantonov/bluebird ) by petkaantonov 
* Simplest way possible to make http calls - [request](https://github.com/request/request ) by request 
* A hapi plugin to geo locate requests - [hapi-geo-locate](https://github.com/fs-opensource/hapi-geo-locate) by futurestud.io 
* Simple server-side session support for hapi - [hapi-server-session](https://github.com/btmorex/hapi-server-session) by btmorex 
* User-agent information plugin for hapi - [scooter](https://github.com/hapijs/scooter) by hapijs 
* Async utilities for node - [async](https://github.com/caolan/async) by caolan 
* Simple, fast generation of RFC4122 UUIDS - [node-uuid](https://github.com/kelektiv/node-uuid) by kelektiv 

#### SDK Generation
* SDK Generation through Swagger (OpenAPI) Specification code generator featuring C# and Razor templates. Supports C#, Java, Node.js, TypeScript, Python and Ruby - [autorest](https://github.com/Azure/autorest) by Azure 

## Usage

### Dependancies
* [node.js](https://nodejs.org/en/) >= v6.10.3
* [npm](https://docs.npmjs.com/getting-started/installing-node) >= v3.10.5
* [pm2](https://github.com/Unitech/pm2) >= v2.4.0 
* [autorest](https://github.com/Azure/autorest) >= v1.1.0

### Installing
With [npm](https://npmjs.org/) installed, run

    $ npm install hapi-bells
    











