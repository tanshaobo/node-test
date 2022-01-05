/*
 * @Author: tanshaobo
 * @Date: 2021-12-24 17:02:10
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 14:13:06
 * @Description: model start
 * @FilePath: \nodeTest\08_router\server.js
 */
const http = require('http')
const url = require('url')

function start(route){
  function onRequest(request, response){
    let pathname = url.parse(request.url).pathname
    console.log(`Request for${pathname}received.`)

    route(pathname)

    response.writeHead(200, {"Content-Type":"text/plain; charset=utf-8"})
    response.write(`
    伤情最是晚凉天，憔悴斯人不堪怜。\n
    邀酒摧肠三杯醉，寻香惊梦五更寒。\n
    钗头凤斜卿有泪，荼蘼花了我无缘。\n
    小楼寂寞新雨月，也难如钩也难圆`)
    response.end()
  }
  
  http.createServer(onRequest).listen(8888)
  console.log(`Server has started.`)
}

exports.start = start