var debug = require('debug')('cione:authority'),
  _ = require('underscore');

module.exports = {
  authorityRequest: function(req, res, next) {
    var path = req.route.path;
    debug("url", path);
    var route = ModuleHelper.getActionByUrl(req.method, path);
    if (_.isEmpty(route))
      return false;

    var userRole = req.session.roles;
    var routeRole = route.roles;
    debug("roles", userRole, routeRole);
    var authority = _.find(userRole, function(uRole) {
      return routeRole.indexOf(uRole) >= 0;
    });
    debug("authority", authority);
    if (authority !== undefined)
      next();
    else {

      res.send(403, {
        message: req.t('app.functionisnotauthority')
      });
    }
  }
}
