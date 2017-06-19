const Boom = require('boom');
var config = require('config');
const configThreshold = config.get('THRESHOLD.REQUESTS');

var isThrottle = function(request, reply, next) {
   request.session.views = request.session.views + 1 || 1;
   if (request.session.views <= configThreshold) {
	  console.log('POLICY: True on isThrottle Policy. Number of requests: ' + request.session.views); 
	  return next(null, true); // All is well with this request.  Proceed to the next policy or the route handler.
   } else {
	 return next(Boom.forbidden('Threshold Breached. Only ' + configThreshold + ' requests per 5 seconds allowed. Restriction applied for 5 seconds.'), false);  
   }
 
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
isThrottle.applyPoint = 'onPreHandler';

module.exports = isThrottle;