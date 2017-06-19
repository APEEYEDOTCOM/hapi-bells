'use strict';
const Utils = require('./utilities.js');

/* ----------------------------------------------------------------------------------- */
function index(request, reply) {
	Utils.getMarkDownHTML(__dirname.replace('/lib','') + '/README.md', function(err, data){
		reply.view('swagger.html', {
			title: 'API',
			markdown: data
		});
	});
}

function reduced(request, reply) {
	Utils.getMarkDownHTML(__dirname.replace('/lib','') + '/README.md', function(err, data){
		reply.view('reduced.html', {
			title: 'Reduced',
			markdown: data
		});
	});
}
 
function hostinfo(request, reply) {

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
    reply(JSON.stringify(data)).type('application/json; charset=utf-8');
}

 

exports.index = index;
exports.reduced = reduced;
exports.hostinfo = hostinfo;





