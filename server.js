/*
 * @Author: tanshaobo
 * @Date: 2021-12-24 17:02:10
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-27 15:02:12
 * @Description: model start
 * @FilePath: \nodeTest\server.js
 */
const http = require('http')
const url = require('url')

function start(route){
  function onRequest(request, response){
    let pathname = url.parse(request.url).pathname
    console.log("Request for " + pathname + " received.")

    route(pathname)

    response.writeHead(200, {"Content-Type":"text/plain"})
    response.write("Hello World")
    response.end()
  }
  
  http.createServer(onRequest).listen(8888)
  console.log("Server has started.")
}

exports.start = start