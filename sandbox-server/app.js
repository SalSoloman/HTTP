const express = require('express')
const app = express()


app.get('/', function(request, response) {
  response.status(200)
  response.set("Content-Type", "text/plain")
  response.send("Welcome to Sandbox")
})

// Sending a GET request to the path /search?q=doodads responds with…
// a 200 (OK) status codex
// a plain-text response body with the content You searched for: "doodads"
// NOTE: (it doesn’t need to actually do any searching, just return the plain text)
// NOTE: “doodads” is a placeholder for whatever string is in the q query param
// the Content-Type header set to text/plain


// Sending a GET request to the path /search responds with…
// a 400 (Bad Request) status code
// a plain-text response body with the content You didn't provide a search query term :(
// the Content-Type header set to text/plain


app.get('/search', function(request, response){
  if (request.query.q.length !== 0) {
    response.status(200)
    response.set("Content-Type", "text/plain")
    response.send("doodads")
  } else {
    response.status(400)
    response.set("Content-Type", "text/html")
    response.send("You did not provide a search query term :(")
  }
})



// Sending a POST request to the path /things with a plain text body flying car responds with…
// a 201 (Created) status code
// a plain-text response body with the content New thing created: "flying car"! (it doesn’t need to actually create anything, just return the plain text)
// NOTE: “flying car” is just a placeholder for whatever string is sent in the POST body.
// the Content-Type header set to text/plain

app.post('/things', function(request, response){
  response.status(201)
  response.set("Content-Type", "text/plain")
  response.send("New thing created: 'flying car'!")
})

// Sending a GET request to the path /somefile with an Accept header of text/plain responds with…
// a 200 (OK) status code
// a plain-text response body with the content This is a plain text file
// the Content-Type header set to text/plain

// Sending a GET request to the path /somefile with an Accept header of text/html responds with…
//  a 200 (OK) status code
//  an HTML response body with the content <!DOCTYPE html><html><body>This is an HTML file</body></html>
//  the Content-Type header set to text/html

app.get('/somefile', function(request, response){
  // console.log(request.headers)
  if (request.headers.accept === "text/plain") {
    response.status(200)
    response.set("Content-Type", "text/plain")
    response.send("This is a plain text file")
  } else if (request.headers.accept === "text/html") {
    response.status(200)
    response.set("Content-Type", "text/html")
    response.send("<!DOCTYPE html><html><body>This is an HTML file</body></html>")
  } else {
    console.log('error')
  }
})

// Sending a GET request to the path /myjsondata with an Accept header of application/json responds with…
//  a 200 (OK) status code
//  an HTML response body with the content { "title": "some JSON data" }
//  the Content-Type header set to application/json

app.get('/myjsondata', function(request, response){
  response.status(200)
  response.set("Content-Type", "application/json")
  response.send({ "title": "some JSON data" })
})

// Sending a GET request to the path /old-page responds with…
// a 301 (Moved Permanently) status code
// the Location header set to http://localhost:3000/newpage

app.get('/old-page', function(request, response) {
  response.set('location', 'http://localhost:3000/newpage')
  response.status(301).send('This page does not exit')
})

app.get('/newpage', function(request, response) {
  response.send('Welcome to the new page')
})


// Sending a POST request to the path /admin-only responds with a 403 (Forbidden) status code
app.post('/admin-only', function(request, response) {
  response.status(403)
  response.send('Forbidden Access GET OUT!!!!!!!')
})

// Sending a GET request to the path /not-a-page responds with a 404 (Not Found) status code
app.get('/not-a-page', function(request, response) {
  response.status(404)
  response.send('No need to look here loooooool')
})

// Sending a GET request to the path /server-error responds with a 500 (Internal Server Error) staus code
app.get('/server-error', function(request, response) {
  response.status(500)
  response.send('Internal Server Error')
})


app.listen(3000, function(request, response){
  console.log("Listening on Port 3000")
})
