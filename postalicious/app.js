const express = require('express')
const app = express()
const path = require('path')
const http = require('http').createServer(app)

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', function(request, response){
  response.send("Are you working?")
})


http.listen(3001, function(request, response){
  console.log("Listening on Port 3001");
})

module.export = app
