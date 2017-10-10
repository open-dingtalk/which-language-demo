## which-language-demo

look me, we can just do more demo. guess, u select which one ?

## 社区支持

钉钉开发社区有数以万计的企业服务开发者，你的公开演示程序，可以有很高机会曝光让其他的开发者学习，使用，甚至可以在这里认识更多志同道合的开发者。

使用[语言]-[客户端或者服务端]-[实现的业务场景]来创建一个演示项目程序，解释如下：

- [语言] 可以是具体的编程语言，框架（react），或者可以有指代含义的单词
- [客户端或者服务端] 可以是fed，server，或者纯粹的cli等，能描述它使用在哪一方面
- [实现的业务场景] 也就是可以用一个有明显含义的单词，描述这个项目是做什么的

我们非常欢迎社区的同学为钉钉的开发生态添砖加瓦，当你创建一个公开的演示项目时，你的项目中必须要包含：README.md，.gitignore，info.text 三个文件。

- README.md可以把你的项目描述清楚，让钉钉的开发者可以快速的使用起来，好的反馈相信对你而言也是一种很有成就感的事情。
- .gitignore文件可以将一些不是必须的文件忽略，不提交到仓库。
- info.text 文件可以给予一些必要的版本信息，注意事项，项目依赖等。

对于公开演示的程序，我们要求必须包含JSAPI授权，获取userId，获取userInfo三个接口，并且有如下的规则：

- 可以定义不同的host，port以及protocol
- 可以自己实现不同的逻辑
- 对外暴露的path必须按照我们的要求定义
- 前后端分离的架构中服务端的实现需要注意 **跨域头 setHeader("Access-Control-Allow-Origin", "*")的设置** [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

| path   |    method   | 参数  | 作用 | response |
| ------------- |:-------------:| -----:| -----:| ----: |
| /api/jsapi-oauth | GET | href | 提供JSAPI授权 | {errcode:0,...response} |
| /api/get-user-info | GET | code | 获取userid | {errcode:0,...response} |
| /api/get | GET | userid | 获取用户信息 | {errcode:0,...response} |

对于前端项目：

- 访问页面时需要在URL地址上配置一个**corpId** 参数，如：`http://127.0.0.1:8089/?corpId=ding94925051369422aa35c2f4657eb6378f`
- 请求的地址需要替换成你本机的服务端IP
- 钉钉客户端会有缓存，如果你修改了HTML，需要在设置中清除缓存，才能看到修改的内容。

如果你准备就绪，请不要忘记 Fork项目，并发起一次 [Pull request](https://github.com/open-dingtalk/which-language-demo/pulls) 。

## 社区开发群

使用钉钉扫描二维码，加入社区开发群。

![](https://gw.alicdn.com/tfs/TB1xkJRbwMPMeJjy1XdXXasrXXa-330-440.png)

## LICENSE

MIT License

Copyright (c) 2017 钉钉开放平台团队

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


