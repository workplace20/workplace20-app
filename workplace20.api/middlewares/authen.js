var _ = require('underscore');
var debug = require("debug")("cione:authen");

module.exports = {
  authen: function(req, res, next) {
    debug("authen");
    var domain = req.customdomain;
    var token = req.header("token") || req.query.token;

    if (!domain || !token) {
      debug("authen", domain, token);
      res.send(401, {
        message:'unauthentication'
      });
    }
		// TODO: read token and check if this user has valid

    next();
  }
}
