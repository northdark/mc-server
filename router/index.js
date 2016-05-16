/**
 * Created by lyq on 15/8/23.
 */
var Router = require('koa-router');
var router = new Router();
require('./home').register(router);
exports.register = function (app) {
  app.use(router.middleware());
};
