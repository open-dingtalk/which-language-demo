/**
 * Created by xiangwenwen on 2017/2/17.
 */

const querystring = require('querystring');
const url = require('url');
const axios = require('axios');
const logger = require('../../logger');
const env = require('../../env');
const getAccessToken = require('../../request/getAccessToken');
const OAPI_HOST = env.OAPI_HOST[env.scheme];

function *getuserinfo(){
    this.set('Access-Control-Allow-Origin','*');
    const accessTokenResponse = yield getAccessToken();
    if (accessTokenResponse.errcode !== 0){
        this.body = {
            errcode: 101,
            errmsg: accessTokenResponse.errmsg
        };
        return;
    }
    const code = querystring.parse(url.parse(this.url).query).code;
    logger.log('warn','code：',code);
    if(!code){
        this.body = {
            errcode: 102,
            errmsg: 'code is empty'
        };
        return;
    }
    const getUserInfoRequest = {
        url: OAPI_HOST + '/user/getuserinfo',
        params: {
            access_token: accessTokenResponse.access_token,
            code: code
        }
    };
    const getUserInfoResponse = yield axios(getUserInfoRequest).then(function(response){
        return response.data;
    }).catch(function(err){
        logger.log('error','get micro apps request bad');
        return {
            errcode: 500,
            errmsg: 'getuserinfo request bad',
            error: err
        }
    });

    if (getUserInfoResponse.errcode !== 0){
        this.body = {
            errcode: 103,
            errmsg: getUserInfoResponse.errmsg
        };
    } else {
        this.body = getUserInfoResponse;
    }
}

module.exports = getuserinfo;
