/*
 * @Author: tanshaobo
 * @Date: 2021-12-24 09:45:29
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-24 11:12:53
 * @Description: 模块系统
 * @FilePath: \nodeTest\08_model.js
 */

const Model = require('./model')

console.log(Model)
let model = new Model()

model.setName('模块A')

model.world()
