/*
 * @Author: tanshaobo
 * @Date: 2021-12-24 16:45:38
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-24 16:53:59
 * @Description: node 函数
 * @FilePath: \nodeTest\09_function.js
 */
/**
 * node 函数是以函数作为其他函数参数
 */

// 以http为例

const http = require('http')

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('Hello World')
  response.end()
}).listen(8888)
