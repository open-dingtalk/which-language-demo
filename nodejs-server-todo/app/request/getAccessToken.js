/**
 * Created by xiangwenwen on 2017/2/17.
 */

const axios = require('axios');
const logger = require('../logger');
const env = require('../env');
const CorpID = env.CorpID;
const CorpSecret = env.CorpSecret;
const OAPI_HOST = env.OAPI_HOST[env.scheme];

/*
 *
 *   通过corpId，corpsecret换取AccessToken
 * */
function *getAccessToken(){
    const accessTokenRequest = {
        url: OAPI_HOST + '/gettoken',
        method: 'get',
        params: {
            corpid: CorpID,
            corpsecret: CorpSecret
        }
    };
    const cacheTime = 7000 * 1000; //缓存时间
    const currentTime = new Date().getTime(); //获取当前时间
    const futureTime = currentTime + cacheTime; //未来过期时间
    const sendTokenRequest = function(){
      return axios(accessTokenRequest).then(function(response){
          const data = response.data;
          if (data.errcode === 0){
              TokenCache = {
                'access_token': data.access_token,
                timestamp: futureTime
              }
              logger.info('token：' + TokenCache);
          }
          return data;
      }).catch(function (err) {
          logger.log('error','get access token request error');
          return {
              errcode: 500,
              errmsg: 'get access token request bad',
              error: err
          }
      });
    }
    if (TokenCache.access_token){
      if((TokenCache.timestamp - currentTime) > (200*100)){
        logger.log('info','cache access_token' + JSON.stringify(TokenCache))
        return {
          'access_token':TokenCache.access_token,
          errcode: 0
        }
      } else {
        return sendTokenRequest();
      }
    }
    return sendTokenRequest();
}

module.exports = getAccessToken;
