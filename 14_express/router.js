/*
 * @Author: tanshaobo
 * @Date: 2022-01-17 17:38:37
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-17 17:53:38
 * @Description: express 路由
 * @FilePath: \nodeTest\14_express\router.js
 */

const express = require('express')
const app = express()

// 主页输出 
app.get('/', (req, res) => {
  console.log('主页GET请求')
  res.send('hello get')
})

app.post('/', (req, res) => {
  console.log('主页POST请求')
  res.send('hello post')
})

app.delete('/del_user', (req, res) => {
  console.log('/del_user 响应 delete 请求')
  res.send('删除页面')
})

app.get('/list_user',(req, res) => {
  console.log('/list_user get 请求')
  res.send('用户列表页面')
})

app.get('/ab*cd',(req, res) => {
  console.log('/ab*cd GET 请求')
  res.send('正则匹配')
})

const server = app.listen(9527, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('应用实例，访问地址为http://127.0.0.1:9527',host, port)
  
})

