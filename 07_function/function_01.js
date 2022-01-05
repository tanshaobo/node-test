/*
 * @Author: tanshaobo
 * @Date: 2021-12-24 16:45:38
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 13:36:12
 * @Description: node 函数
 * @FilePath: \nodeTest\07_function\function_01.js
 */
/**
 * node 函数是以函数作为其他函数参数
 */


const http = require('http')

const onRequest = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('Hello World')
  response.end()
}
http.createServer(onRequest).listen(8888)
