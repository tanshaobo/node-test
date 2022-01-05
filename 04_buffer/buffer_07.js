/*
 * @Author: tanshaobo
 * @Date: 2022-01-05 10:54:15
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 10:54:16
 * @Description: Buffer 缓冲区对比  对比结果 1 0 -1 表示的是排序 之前 之后 或者 相同
 * @FilePath: \nodeTest\04_buffer\buffer_07.js
 */

const buf1 = Buffer.from('少林寺驻武当山办事处')

const buf2 = Buffer.from('少林寺驻武当山办事处大神父王喇嘛')

const result1 = buf1.compare(buf2)
const result2 = buf2.compare(buf1)

console.log('result1',result1)
console.log('result2',result2)
