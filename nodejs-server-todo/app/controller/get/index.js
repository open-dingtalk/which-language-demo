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


function *get(){
    this.set('Access-Control-Allow-Origin','*');
    const accessTokenResponse = yield getAccessToken();
    if (accessTokenResponse.errcode !== 0){
        this.body = {
            errcode: 101,
            errmsg: accessTokenResponse.errmsg
        };
        return;
    }
    const userid = querystring.parse(url.parse(this.url).query).userid;
    logger.log('warn','userid：',userid);
    if (!userid){
        this.body = {
            errcode: 102,
            errmsg: 'userid is empty'
        };
        return;
    }
    const getRequest = {
        url: OAPI_HOST + '/user/get',
        params: {
            access_token: accessTokenResponse.access_token,
            userid: userid
        }
    };
    const getResponse = yield axios(getRequest).then(function(response){
        return response.data;
    }).catch(function(err){
        logger.log('error','get request bad');
        return {
            errcode: 500,
            errmsg: 'get request bad',
            error: err
        }
    });
    if (getResponse.errcode !== 0){
        this.body = {
            errcode: 103,
            errmsg: getResponse.errmsg
        };
    } else {
        this.body = getResponse;
    }
}

module.exports = get;
