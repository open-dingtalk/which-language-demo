#! /usr/bin/env python
import json
from flask import Flask, request
from dingtalk import SecretClient, DingTalkException

app = Flask(__name__)
client = SecretClient('your CORP_ID', 'your CORP_SECRET')

def generate_response(run):
    try:
        ret = run()
        if 'errcode' not in ret:
            ret['errcode'] = 0
    except DingTalkException as e:
        ret = {'errcode': e.errcode}
    return json.dumps(ret), 200, {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"}

@app.route("/api/jsapi-oauth")
def jsapi_oauth():
    return generate_response(lambda: client.get_jsapi_params(request.args['href']))

@app.route("/api/get-user-info")
def get_user_info_by_code():
    return generate_response(lambda: client.user.getuserinfo(request.args['code']))

@app.route("/api/get")
def get_user_info_by_id():
    return generate_response(lambda: client.user.get(request.args['userid']))

if __name__ == '__main__':
    app.run(host='0.0.0.0')