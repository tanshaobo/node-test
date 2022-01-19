/**
 * RESTful  listUsers接口
 */
const express = require('express')
const app = express()
const fs = require('fs')

app.get('/listUsers',(req, res) => {
  fs.readFile(`${__dirname}/users.json`, 'utf8', (err, data) => {
    res.set({'Content-type': 'text/plain; charset=utf-8'})
    console.log(err)
    console.log(data)
    res.end(data)
  })
})

const server = app.listen(9527, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('应用实例，访问地址为：http://127.0.0.1:9527',host, port)
})