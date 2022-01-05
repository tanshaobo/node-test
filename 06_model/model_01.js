/*
 * @Author: tanshaobo
 * @Date: 2021-12-24 09:45:29
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 13:29:50
 * @Description: 模块系统
 * @FilePath: \nodeTest\06_model\model_01.js
 */

const Model = require('./hello')

let model = new Model()

model.setName('模块A')

model.world()
