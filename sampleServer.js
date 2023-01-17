var http = require('http')
var fs = require('fs')
var url = require('url')
const { query } = require('express')


http.createServer(function(req, res){

    var end_point = url.parse(req.url, true)
    var path = end_point.pathname
    var query = end_point.query

    if(path==='/'){
      fs.readFile('sample.html', function(err, data){
        if (err) throw err;
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        res.end()
      })

    }else if(path==='/login'){
      if (query.name){
        res.write(query.name)
      }else{
        res.write("login")
      }
      res.end()

    }else{
      res.write("url not found.")
      res.end()
    }
  }

).listen(7000)