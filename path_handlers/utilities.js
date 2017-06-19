'use strict';
const Marked = require('marked');
const Boom = require('boom');
const Fs = require('fs');
const config = require('config');
const crypto = require('crypto'),
      algorithm = config.get('CRYPTO.ALGORITHM'),
      password = config.get('CRYPTO.PASSWORD');
const uuidV1 = require('uuid/v1');
const uuidV4 = require('uuid/v4');
var archiver = require('archiver');
const cmd = require('node-cmd'); 
const Promise = require('bluebird'); 
const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd }) 

module.exports = {
		// read a file and converts the markdown to HTML
		getMarkDownHTML: function( path, callback ){
				Fs.readFile(path, 'utf8', function (err,data) {
					if (!err) {
						Marked.setOptions({
							gfm: true,
							tables: true,
							breaks: false,
							pedantic: false,
							sanitize: true,
							smartLists: true,
							smartypants: false,
							langPrefix: 'language-',
							highlight: function(code, lang) {
								return code;
							}
						});
						data = Marked(data);
					}
					callback( err, data );
				});
		},
		
		 encrypt: function(text){
		  var cipher = crypto.createCipher(algorithm,password)
		  var crypted = cipher.update(text,'utf8','hex')
		  crypted += cipher.final('hex');
		  return crypted;
		},
		 
		 decrypt: function(text){
		  var decipher = crypto.createDecipher(algorithm,password)
		  var dec = decipher.update(text,'hex','utf8')
		  dec += decipher.final('utf8');
		  return dec;
		 },		
		 
		 generateID: function() {
			return ('0000' + (Math.random()*Math.pow(36,4) << 0).toString(36)).substr(-4);
		 },
		
		generateGUIDv1: function() {
			var retGUIDv1 = uuidV1();
			return retGUIDv1
		},
		
		generateGUIDv4: function() {
			var retGUIDv4 = uuidV4({
			  random: [
				0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea,
				0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36
			  ]
			});
			return retGUIDv4
		},

		buildError: function( code, error ){
    		return Boom.create( parseInt(code, 10), error);
		},

		clone: function( obj ){
			return( JSON.parse( JSON.stringify( obj ) ));
		},


		isString: function (obj) {
		    return typeof (obj) == 'string';
		},


		trim: function (str) {
    		return str.replace(/^\s+|\s+$/g, "");
		},


		isArray: function (obj) {
		    return obj && !(obj.propertyIsEnumerable('length'))
		        && typeof obj === 'object'
		        && typeof obj.length === 'number';
		},
		
		convertTimestamp: function(timestamp) {
			var d = new Date(timestamp),

			yyyy = d.getFullYear(),
			mm = ('0' + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
			dd = ('0' + d.getDate()).slice(-2), // Add leading 0.
			hh = d.getHours(),
			h = hh,
			min = ('0' + d.getMinutes()).slice(-2),
			sec = ('0' + d.getSeconds()).slice(-2),
			time;

			// ie: 2013-02-18, 8:35 AM
			time = yyyy + '-' + mm + '-' + dd + ' ' + h + ':' + min + ':' + sec;
		  
			return time;
		},
		FlattenJSON: function(data) {
			var result = {};
			function recurse (cur, prop) {
				if (Object(cur) !== cur) {
					result[prop] = cur;
				} else if (Array.isArray(cur)) {
					 for(var i=0, l=cur.length; i<l; i++)
						 recurse(cur[i], prop + "[" + i + "]");
					if (l == 0)
						result[prop] = [];
				} else {
					var isEmpty = true;
					for (var p in cur) {
						isEmpty = false;
						recurse(cur[p], prop ? prop+"."+p : p);
					}
					if (isEmpty && prop)
						result[prop] = {};
				}
			}
			recurse(data, "");
			return result;
		},
 
		WordCount: function(str) { 
		  return str.split(" ").length;
		},
		
		isNumber: function(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		},

		 isObjEmpty: function(obj) {
			for(var prop in obj) {
				if(obj.hasOwnProperty(prop))
					return false;
			}
			return JSON.stringify(obj) === JSON.stringify({});
		},

		GenerateSDK: function(swaggerUrl, language, namespace){
			console.log(swaggerUrl);
			console.log(language);
			console.log(namespace);
			var autorestcmd = 'autorest --input-file=' + swaggerUrl + ' --'+language+' --output-folder=../sdks/'+language+' --namespace='+namespace+'';
			console.log(autorestcmd);
			getAsync(
				autorestcmd,
				function(err, data, stderr){
					console.log(err)
					console.log(data)
					console.log(stderr)
				}
			);			
			
		}
		
};
