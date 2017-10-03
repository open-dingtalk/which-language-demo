/**
 * Created by xiangwenwen on 2017/2/16.
 */

const os = require('os');
const querystring = require('querystring');
const url = require('url');
const logger = require('../logger');

function helper(){
    let IPv4;
    let i = 0;
    try {
      for(;i<os.networkInterfaces().en0.length;i++){
          if(os.networkInterfaces().en0[i].family=='IPv4'){
              IPv4=os.networkInterfaces().en0[i].address;
              break;
          }
      }
      logger.info('IPv4',IPv4,{timestamp: Date.now(), pid: process.pid});
      logger.info('PORT',PORT,{timestamp: Date.now(), pid: process.pid});
      logger.info('access your browser address', IPv4 + ':' + 3000,{timestamp: Date.now(), pid: process.pid});
    }catch(e){
      logger.log('error',os.platform() + ' "os.networkInterfaces()" does not support');
    }
    return function *(next) {
        const req = this.request;
        const method = req.method;
        /*
        *
        *   Todo XWW: 未来可以在这里做一些收集的工作，辅助开发环境
        *
        * */
        yield next;
    }
}

module.exports = helper;
