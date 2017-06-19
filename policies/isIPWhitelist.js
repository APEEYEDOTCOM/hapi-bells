const Boom = require('boom');
const ipWhiteList = ['127.0.0.1', '197.97.186.154', '196.38.61.98']; //Add allowed IP addresses into the array object
var isIPWhitelist = function(request, reply, next) {
   
  var ip = request.headers['x-forwarded-for'] || request.info.remoteAddress;
   
   if (ipWhiteList.indexOf(ip) != -1) {
	   console.log('POLICY: True on isIPWhitelist Policy for IP: ' + ip);
       return next(null, true); // All is well with this request.  Proceed to the next policy or the route handler.
   } else {
	   console.log('POLICY: False on isIPWhitelist Policy for IP: ' + ip);
       return next(Boom.unauthorized('This IP Address is not allowed access'), false); // This policy is not satisfied.  Return a 401 Unauthorised.
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
isIPWhitelist.applyPoint = 'onPreHandler';

module.exports = isIPWhitelist;