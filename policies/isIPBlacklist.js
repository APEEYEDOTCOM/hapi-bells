const Boom = require('boom');
const ipBlacklist = ['127.0.0.0', '197.97.186.153', '196.38.61.93']; //Add allowed IP addresses into the array object
var isIPBlacklist = function(request, reply, next) {
   
  var ip = request.headers['x-forwarded-for'] || request.info.remoteAddress;
   
   if (ipBlacklist.indexOf(ip) === -1) {
	   console.log('POLICY: True on isIPBlacklist Policy for IP: ' + ip);
       return next(null, true); // All is well with this request.  Proceed to the next policy or the route handler.
   } else {
	   console.log('POLICY: False on isIPBlacklist Policy for IP: ' + ip);
       return next(Boom.unauthorized('This IP Address is not allowed access. Please contact the API Vendor.'), false); // This policy is not satisfied.  Return a 401 Unauthorised.
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
isIPBlacklist.applyPoint = 'onPreHandler';

module.exports = isIPBlacklist;