/*
 * @Author: tanshaobo
 * @Date: 2021-12-24 09:49:39
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-24 11:12:39
 * @Description: 演示模块
 * @FilePath: \nodeTest\model.js
 */

function hello () {
  let name 
  this.setName = function(thyName)  {
    name = thyName
  }
  this.world = function() {
    console.log('hello' + name)
  }
}

module.exports = hello