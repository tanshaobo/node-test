/*
 * @Author: tanshaobo
 * @Date: 2022-01-18 14:20:38
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-18 14:26:04
 * @Description: express cookie
 * @FilePath: \nodeTest\14_express\cookie.js
 */

const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())

app.get('/', (req, res) => {
  console.dir(req.cookies)
})

app.listen(9527)
