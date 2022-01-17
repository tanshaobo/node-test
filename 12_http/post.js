/*
 * @Author: tanshaobo
 * @Date: 2022-01-17 13:14:19
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-17 14:44:20
 * @Description: post 请求
 * @FilePath: \nodeTest\12_http\post.js
 */

const http = require('http')
const util = require('util')
const querystring = require('querystring')

let postHTML = `<html>
    <head>
      <meta charset="utf-8">
      <title>玉衡</title>
    </head>
    <body>
      <form method="post">
        角色：<input name="name"><br>
        台词：<input name="url"><br>
        <input type="submit"> 
      </form>
    </body>
  </html>`

http.createServer((req, res) => {
  // 定义post变量，暂存请求体信息
  let post = ''
  // 通过req的data时间监听函数，每当接收请求体的数据，就累加到post变量
  req.on('data', (chunk) => {
    post += chunk
  }) 
  // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回
  req.on('end', () => {
    post = querystring.parse(post)
    res.writeHead(200, {'Content-type': 'text/html; charset=utf8'})

    if(post.name && post.url){
      res.write(`角色: ${post.name}`)
      res.write(`<br>`)
      res.write(`台词: ${post.url}`)
    }else{
      res.write(postHTML)
    }
    res.end()
  })
}).listen(3000)