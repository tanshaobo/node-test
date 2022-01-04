/*
 * @Author: tanshaobo
 * @Date: 2022-01-04 17:39:18
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-04 17:48:16
 * @Description: 连接并接收数据
 * @FilePath: \nodeTest\03_events\event_01.js
 */
// 引入events 模块
const events = require('events')
// 创建eventEmitter 对象
let eventEmitter = new events.EventEmitter()

// 创建事件处理程序
const connectHandler = () => {
  console.log('连接成功')
  // 触发 data_received 事件
  eventEmitter.emit('data_received')
}

// 绑定connection事件处理程序
eventEmitter.on('connection', connectHandler)

// 使用匿名函数绑定data_received事件
eventEmitter.on('data_received', () => {
  console.log('数据接收成功。')
})

// 触发connection事件
eventEmitter.emit('connection')

console.log('程序执行完毕。')
