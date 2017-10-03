/**
 * Created by xiangwenwen on 2017/2/16.
 */

const router = require('koa-router')();
const jsapiOAuth = require('../controller/OAuth');
const getUserInfo = require('../controller/getUserInfo');
const get = require('../controller/get');

router.prefix('/api');
router.get('/jsapi-oauth',jsapiOAuth);
router.get('/get-user-info',getUserInfo);
router.get('/get',get);

module.exports = router;
