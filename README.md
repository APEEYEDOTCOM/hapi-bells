<a href="http://www.apeeye.com/">
<p align="center"><img src="http://www.apeeye.com/ApeEyeLogo5TransSMALL.png"></p>
<h1 align="center">APEEYE</h1>
</a>
 
<p align="center">
<a href="https://github.com/APEEYEDOTCOM/hapi-bells/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License"></a>
</p>

# hapi-bells
A Hapi API template with cross cutting concerns baked into the template


* [Introduction](#introduction)
   * [Purpose](#purpose)
   * [What is included in the template?](#what-is-included-in-the-template)
* [License](#license)

## Introduction

### Purpose

We here at APEEYE have been playing around with the hapi.js framework (https://hapijs.com/) for a while now, and absolutely love it. Kudoes to the <a href="https://github.com/orgs/hapijs/people">hapi.js team</a> We set out to create a Hapi template, with some basic features baked into the template, making use of various plugins provided by the community. 

Disclaimer: This template was created by novice developers. We are not claiming this is the absolute best template setup there possibly could be, so feel free to constructively critique it and make suggestions on how to improve it. 

### What is included in the template? 
#### Documentation
* Interactive documentation compliant with the Open API Standard (OAS) - [hapi-swagger](https://github.com/glennjones/hapi-swagger/) by Glen Jones

#### Request and Response Sanitization
* Object schema validation - joi by hapijs https://github.com/hapijs/joi
* Request query, payload, and params sanitization for Hapi - disinfect by genediazjr https://github.com/genediazjr/disinfect
* HTTP-friendly error objects - boom by hapijs https://github.com/hapijs/boom
* Reply to hapi requests with a statusCode and optional headers - hapi-status by daanvanham https://github.com/daanvanham/hapi-status

#### CORS Support
* Extension to enable CORS for hapi - hapi-cors-headers by gr2m https://github.com/gr2m/hapi-cors-headers

#### Performance Measurements
* Response time plugin for hapi - hapi-response-time by pankajpatel https://github.com/pankajpatel/hapi-response-time

#### Policies
* Policies for hapi routes - mrhorse by mark-bradshaw https://github.com/mark-bradshaw/mrhorse

#### Proxies
* Plugin for setting the request.info.remoteAddress and request.info.remotePort based on the X-Forwarded-For and X-Forwarded-Port headers - therealyou by briandela - https://github.com/briandela/therealyou

#### Monitoring
* Realtime Monitoring solution for hapi - hapijs-status-monitor by ziyasal - https://github.com/ziyasal/hapijs-status-monitor

#### Security and Data Encryption
* Simple Bearer authentication scheme plugin for hapi - hapi-auth-bearer-token by johnbrett https://github.com/johnbrett/hapi-auth-bearer-token
* Standard and secure cryptographic algorithms - crypto by Gozala https://github.com/Gozala/crypto

#### Storage
* Asynchronous, non-blocking SQLite3 bindings for Node.js to store token and user information - node-sqlite3 by mapbox https://github.com/mapbox/node-sqlite3 

#### CRON
* A hapi plugin to setup cron jobs - hapi-cron by antonsamper https://github.com/antonsamper/hapi-cron

#### Configuration 
* Hierarchical configurations for your app deployments - config by lorenwest https://github.com/lorenwest/node-config

#### Utilities
* Full featured promise library - bluebird by petkaantonov https://github.com/petkaantonov/bluebird 
* Simplest way possible to make http calls - request by request https://github.com/request/request 
* A hapi plugin to geo locate requests - hapi-geo-locate by futurestud.io https://github.com/fs-opensource/hapi-geo-locate
* Simple server-side session support for hapi - hapi-server-session by btmorex https://github.com/btmorex/hapi-server-session
* User-agent information plugin for hapi - scooter by hapijs https://github.com/hapijs/scooter
* Async utilities for node - async by caolan https://github.com/caolan/async
* Simple, fast generation of RFC4122 UUIDS - node-uuid by kelektiv https://github.com/kelektiv/node-uuid

#### SDK Generation
* SDK Generation through Swagger (OpenAPI) Specification code generator featuring C# and Razor templates. Supports C#, Java, Node.js, TypeScript, Python and Ruby - autorest by Azure https://github.com/Azure/autorest 













