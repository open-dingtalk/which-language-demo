### 软件依赖
* java version "1.7"
* maven3

## Getting Started

1. 将工程clone到本地：`git clone https://github.com/open-dingtalk/which-language-demo.git`, **cd java-server-todo**
2. 使用IDE导入工程，比如eclipse点击`File->import`(推荐使用maven导入), IDEA点击`File->New->Project from Existing Sources...`, 文件编码都是UTF-8
3. 打开工程的Env.java文件，填入企业的CORP_ID和SECRET（CORP_ID和SECRET可以在企业OA后台找到）
```java 
    public static final String CORP_ID = "your CORP_ID";
    public static final String CORP_SECRET = "your CORP_SECRET";
``` 
4. 部署工程，建议使用mvn -DskipTests=true jetty:run运行或者IDE中的maven插件运行


## java版服务端实现

#### 1. /api/jsapi-oauth

* 获取jsapi的签名数据
* 实现类com.alibaba.dingtalk.openapi.servlet.JsAPIServlet

#### 2. /api/get-user-info

* 根据免登授权码获取登陆用户userid
* 实现类 com.alibaba.dingtalk.openapi.servlet.UserInfoServlet

#### 3. /api/get

* 根据userid查询用户信息
* 实现类com.alibaba.dingtalk.openapi.servlet.UserIdServlet