/**
 * Created by xiangwenwen on 2017/10/2.
 */

const axios = require('axios');
const getAccessToken = require('../../request/getAccessToken');
const env = require('../../env');
const logger = require('../../logger');
const OAPI_HOST = env.OAPI_HOST[env.scheme];

function *getMicroApps() {
  if (!TokenCache){
    const accessTokenResponse = yield getAccessToken();
    if (accessTokenResponse.errcode !== 0){
      this.body = {
        errcode: 101,
        errmsg: accessTokenResponse.errmsg
      };
      return;
    }
  }

  const microAppsRequest = {
    url: OAPI_HOST + '/microapp/get_microapp_list',
    params: {
      access_token: TokenCache
    }
  };

  const microAppsResponse = yield axios(microAppsRequest).then(function (response) {
    return response.data;
  }).catch(function(err){
    logger.log('error','get micro apps request bad');
    return {
      errcode: 500,
      errmsg: 'micro apps request bad',
      error: err
    }
  });
  this.set('Access-Control-Allow-Origin','*');
  if (microAppsResponse.errcode !== 0){
    this.body = {
      errcode: 102,
      errmsg: microAppsResponse.errmsg
    };
  } else {
    this.body = microAppsResponse;
  }
}

module.exports = getMicroApps;