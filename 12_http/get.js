/*
 * @Author: tanshaobo
 * @Date: 2022-01-17 11:04:21
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-18 10:53:34
 * @Description: get请求
 * @FilePath: \nodeTest\12_http\get.js
 */

const http = require('http')
const url = require('url')
const util = require('util')

http.createServer((req, res) => {
  res.writeHead(200, {'content-type':'text/plain; charset=utf-8'})
  const param = url.parse(req.url, true).query
  res.write(`角色: ${param.name}`)
  res.write(`\n`)
  res.write(`台词: ${param.url}`)
  res.write(`\n`)
  res.end(util.inspect(url.parse(req.url, true)))
}).listen(3000)