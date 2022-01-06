/*
 * @Author: tanshaobo
 * @Date: 2022-01-06 13:50:42
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-06 13:50:42
 * @Description: 判断类型 util中大量判断类型的函数
 * @FilePath: \nodeTest\10_util\checkType.js
 */
const util = require('util')

// util.isArray(object) 判断数组
console.log('[]',util.isArray([]))
console.log('{}',util.isArray({}))

// util.isRegExp(object) 判断正则
console.log('RegExp', util.isRegExp(/\d/))

// util.isDate(new Date())
console.log('date',util.isDate(new Date()))