'use strict';
const fs = require('fs');
var archiver = require('archiver');
const cmd = require('node-cmd'); 
const Promise = require('bluebird'); 
const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd }) 

module.exports = {
 
		GenerateSDK: function(swaggerUrl, language, namespace){
			console.log(swaggerUrl);
			console.log(language);
			console.log(namespace);
			var autorestcmd = 'autorest --input-file=' + swaggerUrl + ' --'+language+' --output-folder=./public/sdks/'+language+' --namespace='+namespace+'';
			console.log(autorestcmd);
			getAsync(
				autorestcmd,
				function(err, data, stderr){
					console.log(err)
					console.log(data)
					console.log(stderr) 
			  
				// create a file to stream archive data to. 
				console.log(__dirname + '/'+language+'.zip')
				var output = fs.createWriteStream(__dirname + '/'+language+'.zip');
				var archive = archiver('zip', {
					store: true // Sets the compression method to STORE. 
				});

				// good practice to catch this error explicitly 
				archive.on('error', function(err) {
				  throw err;
				});
				 
				// pipe archive data to the file 
				archive.pipe(output);
				 
				// append files from a directory 
				archive.directory('./public/sdks/'+language+'/'); 
				 
				// finalize the archive (ie we are done appending files but streams have to finish yet) 
				archive.finalize();		
				return 'done'	
					 
				}
			);			
			
		}
		
};
