/*
 * @Author: tanshaobo
 * @Date: 2022-01-06 13:42:37
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-06 13:46:26
 * @Description: inherits 实现对象间原型继承函数
 * @FilePath: \nodeTest\10_util\inherits.js
 */
const util = require('util')

// util.inherits 实现对象间原型继承的函数
function Base(){
  this.name = 'base'
  this.base = 1991
  this.sayHello = function(){
    console.log('Hello ' + this.name)
  }
}

Base.prototype.showName = function(){
  console.log(this.name)
}

function Sub() {
  this.name = 'sub'
}

util.inherits(Sub, Base)
const objBase = new Base()
objBase.showName()
objBase.sayHello()
console.log(objBase)

const objSub = new Sub()
objSub.showName()
console.log(objSub)