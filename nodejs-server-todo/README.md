使用了几个重要的库：

- https://github.com/mzabriskie/axios
- https://github.com/winstonjs/winston
- https://github.com/koajs/koa
- https://github.com/moment/moment
- https://github.com/alexmingoia/koa-router

## 如何启动服务

windows用户：

```bash
# install dependencies
$ npm install

# 安装 nodemon
$ npm install -g nodemon

# 启动服务器
$ npm run serve
```

**由于服务使用了几个windows不支持的方法来显示IP地址，So，windows用户需要将index.js中`app.use(helper());`和`const helper = require('./middleware/helper');`两行删除，运行`npm run serve`才不会报错。**

Mac用户：


```bash
# install dependencies
$ npm install

# 安装 nodemon
$ npm install -g nodemon

# 启动服务器
$ npm run serve
```

安装全局的nodemon，为DEV环境的服务启动工具，cd到本项目内，`npm install` 安装完成之后，输出：`npm run serve`即启动服务器。

**注意⚠️：运行 npm run serve之前，一定要全局安装完成nodemon，以及在本项目内npm install**

## 项目说明

- api/ 路由的定义
- controller/ 请求进来之后具体的实现
- logger/ 日志系统
- middleware/ 自定义的中间件
- request/ 服务端请求放置的目录
- env.js 配置信息
- index.js 服务启动的入口


由于koa 1.x是基于ES6 Generator来处理请求的异步流程，So你还需要去学习一下ES6的 Generator的使用。

- [https://ponyfoo.com/articles/es6-generators-in-depth](https://ponyfoo.com/articles/es6-generators-in-depth)

这篇文章从Generator函数和Generator对象属性开始介绍，以及一些其他很棒的地方，比如控制反转，处理异步流，抛出异常等，适合入门阅读。

好消息的是`koa`有阿里的同事在参与，它有一份同步的中文文档，如果你还不了解koa的使用，建议阅读：

- [https://github.com/guo-yu/koa-guide](https://github.com/guo-yu/koa-guide)。

## 代码说明

我们从实现js-api权鉴说起，为了让前端可以顺利的调用钉钉的Api，我们需要实现一套权限校验的机制，这是一个互换身份令牌的方式。

我们在api目录中的index.js文件内，设计好Api，在controller目录中创建好一个路由的映射实现入口，比如OAuth ：

```JavaScript
const router = require('koa-router')();
const jsapiOAuth = require('../controller/OAuth');
router.prefix('/api');
router.get('/jsapi-oauth',jsapiOAuth);
module.exports = router;
```

在入口文件中，将 `router` 注入到koa的中间件中：

```JavaScript
const koa = require('koa');
const apis = require('./api');
const app = koa();
app.use(apis.routes());
app.use(apis.allowedMethods());
app.listen(PORT);
```

这就构成了一个完整的请求。

通过阅读我们开放平台的文档 [https://open-doc.dingtalk.com/doc2/detail.htm?spm=a219a.7629140.0.0.NmsobH&treeId=171&articleId=104934&docType=1#s0](https://open-doc.dingtalk.com/doc2/detail.htm?spm=a219a.7629140.0.0.NmsobH&treeId=171&articleId=104934&docType=1#s0)，我们可以知道，js-api权限校验的步骤。

```JavaScript
dd.config({
    agentId: '', // 必填，微应用ID
    corpId: '',//必填，企业ID
    timeStamp: , // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '', // 必填，签名
    type:0/1,   //选填。0表示微应用的jsapi,1表示服务窗的jsapi。不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
    jsApiList : [ 'runtime.info', 'biz.contact.choose',
        'device.notification.confirm', 'device.notification.alert',
        'device.notification.prompt', 'biz.ding.post',
        'biz.util.openLink' ] // 必填，需要使用的jsapi列表，注意：不要带dd。
});
```
从config的配置参数来看，我们需要服务端来帮助我们生成签名，随机串，时间，corpId，agentId，于是看了文档之后发现签名依赖于jsapi_ticket，通过如何获取jsapi_ticket的参数，我们又可以推断出需要access_token，好了，这应该是我们该做的第一个步骤。

- [获取access_token](https://open-doc.dingtalk.com/doc2/detail.htm?spm=a219a.7629140.0.0.1RbJpH&treeId=172&articleId=104980&docType=1#s2)
- [通过access_token换取jsapi_ticket](https://open-doc.dingtalk.com/doc2/detail.htm?spm=a219a.7629140.0.0.4pCQWX&treeId=172&articleId=104966&docType=1#s0)
- [通过jsapi_ticket来生成签名，响应给前端](https://open-doc.dingtalk.com/doc2/detail.htm?spm=a219a.7629140.0.0.NmsobH&treeId=171&articleId=104934&docType=1#s0)

那么服务端这边应该需要设计一个对前端的API，构造两个对open-api的请求。对于服务端内部的请求，我们使用了axios，它会返回一个Promise对象，天然的可以和Generator配合使用。

```JavaScript
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
    return axios(accessTokenRequest).then(function(response){
        const data = response.data;
        if (data.errcode === 0){
            TokenCache = data.access_token;
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

module.exports = getAccessToken;
```

详情，请阅读controller/OAuth目录下的文件。