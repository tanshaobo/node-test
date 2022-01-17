/*
 * @Author: tanshaobo
 * @Date: 2022-01-17 16:02:18
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-17 16:12:32
 * @Description: 服务文件
 * @FilePath: \nodeTest\13_web\server.js
 */

const http = require('http')
const fs = require('fs')
const url = require('url')

// 创建服务器
http.createServer((req, res) => {
  // 解析请求，包括文件名
  const pathname = url.parse(req.url).pathname

  // 输出请求的文件名
  console.log(`request for ${pathname} received`)

  // 从文件系统中读取请求的文件内容
  fs.readFile(pathname.substr(1), (err, data) => {
    if(err){
      console.log(err)
      res.writeHead(404, {'Content-type': 'text/html'})
    }else{
      res.writeHead(200, {'Content-type': 'text/html'})

      // 响应文件内容
      res.write(data.toString())
    }
    res.end()
  })
}).listen(8081)

// 控制台输出

console.log('Server running at http://127.0.0.1:8081')