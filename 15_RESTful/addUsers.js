/**
 * RESTful addUsers接口
 */
const express = require('express')
const app = express()
const fs = require('fs')

// 添加的新用户数据
const user = {
  zhidong: {
    name: "达达利亚",
    type: "水",
    weapon:"弓",
    id: 4
  }
}

app.get("/addUsers", (req, res) => {
  // 读取已存在的数据
  fs.readFile(`${__dirname}/users.json`,'utf8',(err, data) => {
    res.set({'Content-type': 'text/plain; charset=utf-8'})
    data=JSON.parse(data)
    data['zhidong'] = user['zhidong']
    console.log(data)
    res.end(JSON.stringify(data))
  })
})

const server = app.listen(9527, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('应用实例，访问地址为：http://127.0.0.1:9527/index_upload', host, port)
})