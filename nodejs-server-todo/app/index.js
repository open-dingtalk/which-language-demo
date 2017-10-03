/**
 * Created by xiangwenwen on 2017/2/15.
 */

const koa = require('koa');
const koaLogger = require('koa-logger');
const onerror = require('koa-onerror');
const bodyParser = require('koa-body-parser');
const apis = require('./api');
const logger = require('./logger/');
const helper = require('./middleware/helper');
const app = koa();

global.PORT = 3000;
global.TicketCacheMap = [];
global.TokenCache = {};
app.env = process.env.NODE_ENV || 'development';
if (app.env === 'development') {
    app.use(koaLogger());
    app.use(helper());
}
onerror(app);
app.use(bodyParser());
app.use(apis.routes());
app.use(apis.allowedMethods());
app.listen(PORT);
