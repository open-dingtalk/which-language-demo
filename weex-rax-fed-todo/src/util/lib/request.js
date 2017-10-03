import dingtalk from 'dingtalk-javascript-sdk';
import { request, authCode, fetchBundleUrl } from './util.js';
import { APPHOST } from './env.js';

export function jsApiOAuth (){
  let Config = {
    method: 'GET',
    uri: APPHOST + '/api/jsapi-oauth',
    body: {
      href: fetchBundleUrl()
    }
  };
  let jsApiList = [];
  return new Promise(function(resolve, reject){
    request(Config,function(error,res){
      if (!error){
        const data = res.data;
        if (data.errcode === 0){
          const oauth = {
            agentId: data.agentId || '',
            corpId: data.corpId || '',
            timeStamp: data.timeStamp || '',
            nonceStr: data.nonceStr || '',
            signature: data.signature || '',
            jsApiList: jsApiList || []
          };
          dingtalk.config(oauth);
          resolve();
        }
      } else {
        reject(res);
      }
    });
  });
}

export function getUserId (){
  let Config = {
    method: 'GET',
    uri: APPHOST + '/api/get-user-info'
  };
  return new Promise(function(resolve, reject){
    authCode().then(function(result){
      const code = result.code;
      Config.body = {};
      Config.body.code = code;
      request(Config,function(error,res){
        if (!error && res.ok){
          const data = res.data;
          if (data.errcode === 0){
            resolve(data);
          } else {
            reject(data);
          }
        }
      });
    }).catch(function(err){
      reject(err);
    });
  });
}

export function getUserInfo(userId){
  let Config = {
    method: 'GET',
    uri: APPHOST + '/api/get',
    body: {
      userid: userId
    }
  };
  return new Promise(function(resolve, reject){
    request(Config, function(error, res){
      if (!error && res.ok){
        const data = res.data;
        if (data.errcode === 0){
          // 再处理
          resolve(data);
        } else {
          reject(data);
        }
      }
    });
  });
}
