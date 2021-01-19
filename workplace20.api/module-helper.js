var debug = require('debug')('cione:module helper'),
    fs = require('fs'),
    _ = require('underscore'),
    INTERNAL_ROUTE_CACHE = {};

module.exports = {
    loadRoutes: function () {

        var setting = _.extend({
            folder: './routes',
            exclude: []
        }, {});

        var files = fs.readdirSync(setting.folder);
        var routes = [];
        files.forEach(function (file) {
            if (file && file.indexOf('.js') < 0 || file.indexOf('.swp') >= 0) return;
            routes.push(require(['./routes/', file].join('')));
            debug('file',file);
        });

        return routes;

    },
    _getKey: function (method, url) {
        if (method) {
            method = method.toLowerCase();
        }
        return [method, '_', url].join('');
    },
    setActionByUrl: function (method, url, action) {
        if (INTERNAL_ROUTE_CACHE[this._getKey(method, url)]) {
            throw new Error(["duplicate defined route pattern ", url].join(''));
        }

        INTERNAL_ROUTE_CACHE[this._getKey(method, url)] = action;

    },
    getActionByUrl: function (method, url) {
        var route = INTERNAL_ROUTE_CACHE[this._getKey(method, url)];
        if (!route) {
            throw new Error("cannot find route by url for authority");
        }
        return route;
    }
}
