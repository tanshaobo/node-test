/*
 * @Author: tanshaobo
 * @Date: 2021-12-28 10:09:05
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-06 13:45:01
 * @Description: node util
 * @FilePath: \nodeTest\10_util\12_util.js
 */

const util = require('util')

// util.inspect 将任意对象转化为字符串
function Person(){
  this.name = 'byvoid'
  this.toString = function(){
    return this.name
  }
}

const obj = new Person()
console.log(util.inspect(obj))
console.log(util.inspect(obj,true))

// util.isArray(object) 判断数组
console.log('[]',util.isArray([]))
console.log('{}',util.isArray({}))

// util.isRegExp(object) 判断正则
console.log('RegExp', util.isRegExp(/\d/))

// util.isDate(new Date())
console.log('date',util.isDate(new Date()))