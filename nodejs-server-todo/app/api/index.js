/**
 * Created by xiangwenwen on 2017/2/16.
 */

const router = require('koa-router')();
const jsapiOAuth = require('../controller/OAuth');
const getUserInfo = require('../controller/getUserInfo');
const get = require('../controller/get');
const microApps = require('../controller/microapps');

router.prefix('/api');
router.get('/jsapi-oauth',jsapiOAuth);
router.get('/get-user-info',getUserInfo);
router.get('/get',get);
router.get('/get-microapp-list',microApps);

module.exports = router;
