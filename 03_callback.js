// 引入fs模块
let fs = require('fs')

/** 阻塞式 */  
// 调用延时读取方式
let data = fs.readFileSync('input.txt')

console.log(data.toString(), 1)

/** 非阻塞 */ 
// 调用读取
fs.readFile('input.txt', (err,data) => {
  if(err) console.log(err)
  console.log(data.toString(), 2)
})

console.log('application is over')