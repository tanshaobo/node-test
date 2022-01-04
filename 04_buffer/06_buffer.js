/*
 * @Author: tanshaobo
 * @Date: 2021-12-15 14:17:17
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-04 18:05:10
 * @Description: Buffer 与字符编码
 * @FilePath: \nodeTest\04_buffer\06_buffer.js
 */
/** 
 * Buffer 写入缓冲区
*/ 
const buf7 = Buffer.alloc(256)

len = buf7.write('www.w3cschool.com')

console.log(`buf写入字节数:${len}`)

/**
 *  Buffer 读取缓冲区
 */

const buf8 = Buffer.alloc(26)

for(let i = 0; i< 26; i++){
  buf8[i] = i + 97
}

console.log('buf8',buf8)

console.log('buf8',buf8.toString('ascii'))

console.log('buf8',buf8.toString('ascii', 7))

console.log('buf8',buf8.toString('ascii',7,14))

/**
 * Buffer 转JSON
*/ 
const buf9 = Buffer.from([0x1,0x2,0x3,0x4,0x5])

console.log('buf9', buf9)

const json = JSON.stringify(buf9)

console.log('json',json)

const copy = JSON.parse(json, (k,v) => v&&v.type == 'Buffer' ? Buffer.from(v.data) : v)

console.log('copy',copy)

/** 
 * Buffer 缓冲区合并
*/

const buf10 = Buffer.from('前端')

const buf11 = Buffer.from('攻城狮')

const buf12 = Buffer.concat([buf10,buf11])

console.log('buf12', buf12.toString())

/** 
 * Buffer 缓冲区对比
 * 对比结果 1 0 -1 表示的是排序 之前 之后 或者 相同
*/ 

const buf13 = Buffer.from('少林寺驻武当山办事处')

const buf14 = Buffer.from('少林寺驻武当山办事处大神父王喇嘛')

const result1 = buf13.compare(buf14)
const result2 = buf14.compare(buf13)

console.log('result1',result1)
console.log('result2',result2)

/**
 * Buffer 拷贝缓冲区
 * 根据返回结果，类似数组fullfill 从指定位置开始填充，填充到任一长度终止位置
 */

const buf15 = Buffer.from('abcd')

const buf16 = Buffer.from('123')

console.log('buf15',buf15)
console.log('buf16',buf16)

buf16.copy(buf15, 2)

console.log(buf15.toString())

/**
 * Buffer 裁剪缓冲区 类似字符串slice
 */

const buf17 = Buffer.from('zxcvbnm')

console.log('buf17',buf17)

console.log(buf17.slice(2,5).toString(),buf17.toString())

/**
 * Buffer 缓冲区长度
 */

const buf18 = Buffer.from('asdfghjkl')
console.log('buf18',buf18.length)