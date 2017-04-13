const express = require('express')
const app = express()
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')

app.use(logger('combined'))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

app.post('/request', function(request, response){

  const requestPayload = request.body
  console.log('WOULD DO HTTP REQUEST LIKE THIS:', requestPayload)
  const method = requestPayload.method
  const host = requestPayload.host

  // DO THE HTTP REQIEST
  // .then WHEN WE GET THE RESPONSE
  // send back details about the response via response.json

  response.json({
    testroute: true,
    method,
    host,
  })
})


app.listen(3001, function(request, response){
  console.log("Listening on Port 3001");
})

module.export = app
