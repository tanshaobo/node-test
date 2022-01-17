/*
 * @Author: tanshaobo
 * @Date: 2022-01-17 16:18:17
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-17 16:29:18
 * @Description: 客户端文件
 * @FilePath: \nodeTest\13_web\client.js
 */

const http = require(`http`)

// 用于请求的选项

const options = {
  host: 'localhost',
  port: '8081',
  path: '/13_web/index.html'
}

// 处理响应的回调函数
const callback = (res) => {
  // 不断更新数据
  let body = ''
  res.on('data', (data) => {
    body += data
  })

  res.on('end', () => {
    // 数据接收完成
    console.log(body)
  })
}

// 向服务端发送请求
const req = http.request(options, callback)
req.end()