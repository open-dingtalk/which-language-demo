/**
 * Created by xiangwenwen on 2017/2/17.
 */

const axios = require('axios');
const logger = require('../logger');
const env = require('../env');
const OAPI_HOST = env.OAPI_HOST[env.scheme];

function *getJsApiTicket(access_token) {
    const cacheTime = 7000 * 1000; //缓存时间
    const currentTime = new Date().getTime(); //获取当前时间
    const futureTime = currentTime + cacheTime; //未来过期时间
    const ticket = TicketCacheMap[0];
    const sendTicketRequest = function(){
        const jsApiTicketRequest = {
            url: OAPI_HOST + '/get_jsapi_ticket',
            method: 'get',
            params: {
                access_token: access_token
            }
        };
        return axios(jsApiTicketRequest).then(function (response) {
            const data = response.data;
            if (data.errcode !== 0){
                return data;
            } else {
                TicketCacheMap.length = 0;
                TicketCacheMap.push({
                    timestamp: futureTime,
                    ticket: data.ticket,
                    errcode: 0
                });
                return data;
            }
        }).catch(function (err) {
            logger.log('error','get js api ticket request error');
            return {
                errcode: 500,
                errmsg: 'ticket request bad',
                error: err
            }
        });
    };
    if (ticket){
        /*
         * 缓存的时间 - 当前的时间，如果还大于 (200*100) 表示有效期还存在，返回缓存
         *
         * */
        if((ticket.timestamp - currentTime) > (200*100)){
            return {
              ticket: ticket,
              errcode: 0
            }
        } else {
            logger.log('warn', 'ticket cache overdue');
            return sendTicketRequest();
        }
    }
    logger.log('warn', 'ticket cache empty');
    return sendTicketRequest();
}

module.exports = getJsApiTicket;
