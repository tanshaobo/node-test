/*
 * @Author: tanshaobo
 * @Date: 2022-01-06 13:24:31
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-06 13:40:17
 * @Description: util 下函数 callbackify 将异步函数转换成遵循异常优先的回调风格的函数
 * @FilePath: \nodeTest\10_util\callbackify.js
 */

const util = require('util')

async function fn(){
  return Promise.reject(null)
}

const callbackFuntion = util.callbackify(fn)

callbackFuntion((err, ret) => {
  err && err.hasOwnProperty('reason') && err.reason == null
  console.log(ret)
})
