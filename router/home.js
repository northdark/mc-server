/**
 * Created by yeanzhi on 16/5/16.
 */
'use strict';
var render = require('../lib/render');

var homePage = function*() {
    this.body = yield render('index', {});
};
var props = function*() {
    this.body = yield render('props', {});
};
var p1_8 = function*() {
    this.body = yield render('1_8', {});
};
var more = function*() {
    this.body = yield render('more', {});
};
var hechengbiao = function*() {
    this.body = yield render('hechengbiao', {});
};
exports.register = function (router) {
    router.get('/', homePage);
    router.get('/props', props);
    router.get('/1_8', p1_8);
    router.get('/more', more);
    router.get('/hechengbiao', hechengbiao);
};