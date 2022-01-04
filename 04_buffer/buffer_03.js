/*
 * @Author: tanshaobo
 * @Date: 2022-01-04 18:12:35
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-04 18:14:23
 * @Description: Buffer写入缓存区
 * @FilePath: \nodeTest\04_buffer\buffer_03.js
 */
const buf = Buffer.alloc(256)

len = buf.write('心有所向，日复一日，必有精进')

console.log(`buf写入字节数:${len}`)