/*
 * @Author: tanshaobo
 * @Date: 2022-01-06 13:48:06
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-06 13:49:55
 * @Description: 将任意对象转化为字符串
 * @FilePath: \nodeTest\10_util\inspect.js
 */
const util = require('util')

// util.inspect 将任意对象转化为字符串
function Person(){
  this.name = '陵薮市朝'
  this.toString = function(){
    return this.name
  }
}

const obj = new Person()
console.log(util.inspect(obj))
console.log(util.inspect(obj,true))
