/*
 * @Author: tanshaobo
 * @Date: 2022-01-17 17:00:12
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-17 17:22:15
 * @Description: express框架首秀
 * @FilePath: \nodeTest\14_express\demo.js
 */

const express = require('express')
const app = express()

app.get('/',(req, res) => {
  res.send('阴阳有序，命运无常')
})

const server = app.listen(9527, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('应用实例，访问地址为 http://127.0.0.1:9527', host, port)
})