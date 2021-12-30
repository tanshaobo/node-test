// 引入http模块
var http = require('http')
// createServer 创建服务器 listen 绑定8888端口
http.createServer((request, response) => {
  // 发送 HTTP头部
  // HTTP 状态值 200： OK
  // 内容类型： text/plain
  response.writeHead(200, {'Content-Type':'text/plain'})
  // 发送响应数据 
  response.end('hello, this is a node app')
}).listen(9527)

console.log('Server running at http://127.0.0.1:9527')
