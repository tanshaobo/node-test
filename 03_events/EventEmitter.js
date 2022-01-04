// 引入events
let events = require('events')

// 创建eventEmitter 对象
let eventEmitter = new events.EventEmitter()
 
// 监听器1
let listener1 = () => {
  console.log('监听器listener1')
}
// 监听器2
let listener2 = () => {
  console.log('监听器listener2')
}
// 绑定connection事件 处理函数为listener1
eventEmitter.addListener('connection',listener1)

// 绑定connection事件 处理函数为listener2
eventEmitter.on('connection', listener2)

// 获取事件监听器数量
let eventListeners = eventEmitter.listenerCount('connection')
console.log(eventListeners + '个监听器监听连接事件')

// 触发connection事件
eventEmitter.emit('connection')

// 移除监听绑定的listener1事件
eventEmitter.removeListener('connection',listener1)
console.log('listener1不在受监听')
// 触发链接事件
eventEmitter.emit('connection')

eventListeners = eventEmitter.listenerCount('connection')
console.log(eventListeners + '个监听器监听连接事件')

console.log('over')

eventEmitter.emit('error')
