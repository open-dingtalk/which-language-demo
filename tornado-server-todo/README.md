本demo为tornado简要示例，可正常运行，只提供 `/api/jsapi-oauth` `/api/get-user-info` `/api/get` 三个接口
详细 django 示例 请参考 https://github.com/007gzs/dingtalk-django-example

### 安装依赖
`pip install -U tornado dingtalk-sdk`

### 修改配置
打开工程的demo.py文件，填入企业的CORP_ID和SECRET（CORP_ID和SECRET可以在企业OA后台找到）
`client = SecretClient('your CORP_ID', 'your CORP_SECRET')`

### 运行DEMO
`python demo.py`
