/*
 * @Author: tanshaobo
 * @Date: 2022-01-18 09:53:51
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-18 10:02:39
 * @Description: express 静态文件
 * @FilePath: \nodeTest\14_express\static.js
 */

const express = require('express')
const app = express()

app.use(express.static('14_express'))

app.get('/', (req, res) => {
  res.send('钟离')
})

const server = app.listen(9527, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('应用实例，访问地址为http://127.0.0.1:9527', host,port)
})