/**
 * Created by xiangwenwen on 2017/2/16.
 */

const crypto = require('crypto');
const querystring = require('querystring');
const url = require('url');
const logger = require('../../logger');
const env = require('../../env');
const getAccessToken = require('../../request/getAccessToken');
const getJsApiTicket = require('../../request/getJsApiTicket');
const CorpID = env.CorpID;

/*
 *
 *   根据jsapiTicket生成签名，返回给前端
 * */
function signature(params) {
    const origUrl = params.signedUrl;
    let origUrlObj =  url.parse(origUrl);
    delete origUrlObj['hash'];
    const newUrl = url.format(origUrlObj);
    logger.info('newUrl：' + newUrl);
    const plain = 'jsapi_ticket=' + params.ticket +
        '&noncestr=' + params.nonceStr +
        '&timestamp=' + params.timeStamp +
        '&url=' + newUrl;
    logger.info('signa plain：',plain);
    const sha1 = crypto.createHash('sha1');
    sha1.update(plain, 'utf8');
    const signature = sha1.digest('hex');
    logger.info('signature：' + signature);
    return signature;
}

/*
 *
 *  js-api权限校验入口
 * */
function *jsApiOAuth(next) {
    const nonceStr = 'icepy';
    const timeStamp = new Date().getTime();
    const href = querystring.parse(this.querystring).href;
    const signedUrl = decodeURIComponent(href);
    this.set('Access-Control-Allow-Origin','*');
    // 获取token
    const accessTokenResponse = yield getAccessToken();
    if (accessTokenResponse.errcode !== 0){
        this.body = {
            errcode: 101,
            errmsg: accessTokenResponse.errmsg
        };
        return;
    }
    //获取ticket
    const jsapiTicketResponse = yield getJsApiTicket(accessTokenResponse.access_token);
    if (jsapiTicketResponse.errcode !== 0){
        this.body = {
            errcode: 102,
            errmsg: jsapiTicketResponse.errmsg
        };
        return;
    }
    logger.info('ticket：' + jsapiTicketResponse.ticket);
    //签名
    const sign = signature({
        nonceStr: nonceStr,
        timeStamp: timeStamp,
        signedUrl: signedUrl,
        ticket: jsapiTicketResponse.ticket
    });
    this.body = {
        // agentId: '76853717',
        signature: sign,
        nonceStr: nonceStr,
        timeStamp: timeStamp,
        corpId: CorpID,
        errcode: 0
    };
}

module.exports = jsApiOAuth;