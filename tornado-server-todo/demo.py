#! /usr/bin/env python
import json
import tornado.ioloop
import tornado.web
from dingtalk import SecretClient, DingTalkException

client = SecretClient('your CORP_ID', 'your CORP_SECRET')

class BaseHandler(tornado.web.RequestHandler):
    def generate_response(self):
        raise NotImplementedError
    def get(self):
        try:
            ret = self.generate_response()
            if 'errcode' not in ret:
                ret['errcode'] = 0
        except DingTalkException as e:
            ret = {'errcode': e.errcode}
        self.set_header('Content-Type', 'application/json')
        self.set_header('Access-Control-Allow-Origin', '*')
        self.write(json.dumps(ret))

class JsapiOauth(BaseHandler):
    def generate_response(self):
        return client.get_jsapi_params(self.get_query_arguments('href'))
class GetUserInfoByCode(BaseHandler):
    def generate_response(self):
        return client.user.getuserinfo(self.get_query_arguments('code'))
class GetUserInfoById(BaseHandler):
    def generate_response(self):
        return client.user.get(self.get_query_arguments('userid'))

if __name__ == "__main__":
    app = tornado.web.Application([
        (r"/api/jsapi-oauth", JsapiOauth),
        (r"/api/get-user-info", GetUserInfoByCode),
        (r"/api/get", GetUserInfoById),
    ])
    app.listen(5000)
    tornado.ioloop.IOLoop.current().start()