/*
 * @Author: tanshaobo
 * @Date: 2022-01-18 11:27:57
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-18 14:13:53
 * @Description: express 文件上传
 * @FilePath: \nodeTest\14_express\upload.js
 */

const express = require('express')
const app = express()
const fs = require('fs')

const bodyParser = require('body-parser')
const multer = require('multer')

app.use(express.static('14_express'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(multer({dest: '/tmp/'}).array('image'))

app.get('/index.html',(req, res) => {
  res.sendFile(`${__dirname}/index_upload.html`)
})

app.post('/file_upload', (req, res) => {
  console.log(req.files[0])
  res.set({'Content-type': 'text/plain; charset=utf-8'})
  const des_file = __dirname + '/images/' + req.files[0].originalname
  fs.readFile(req.files[0].path,(err, data) => {

    fs.writeFile(des_file, data, err => {
      let response
      if(err){
        console.log(err)
      }else{
        response = {
          message: '上传成功',
          filename: req.files[0].originalname
        }
      }
      console.log(response)
      res.end(JSON.stringify(response))
    })
    
  })
})

const server = app.listen(9527, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('应用实例，访问地址为http://127.0.0.1:9527')
})