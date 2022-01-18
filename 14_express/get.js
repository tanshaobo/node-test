/*
 * @Author: tanshaobo
 * @Date: 2022-01-18 10:07:12
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-18 10:55:02
 * @Description: express get请求
 * @FilePath: \nodeTest\14_express\get.js
 */

const express = require('express')
const app = express()
app.use(express.static('14_express'))

app.get('/index.html', (req, res) => {
  console.log(__dirname)
  res.sendFile(__dirname + '/' + 'index_get.html')
})

app.get('/process_get', (req, res) => {
  
  // 此三种方法均可设置header
  // res.set({'Content-type': 'text/plain; charset=utf-8'})
  // res.setHeader('Content-type', 'text/plain; charset=utf-8')
  res.header('Content-type', 'text/plain; charset=utf-8')
  // 输出JSON
  response = {
    name: req.query.name,
    code: req.query.code
  }
  console.log(response)
  res.end(JSON.stringify(response))
})

const server = app.listen(9527, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('应用实例，访问地址为http://127.0.0.1:9527', host, port)
})