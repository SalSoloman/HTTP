function fetchMethod() {
  const method = document.getElementById('methos').value
  const host = document.getElementById('hose').value
  const requestContainer = document.getElementsByClassName('request-box')[0]
  const responseContainer = document.getElementsByClassName('response-box')[0]
}

requestContainer.innerText = `
 ${methos}
 ${host}
`

const headers = new Headers({
  "Content-Type": "application/json"
})

const options = {
  method: 'POST',
  headers,
  body: JSON.stringify({
    method,
    host
  })
}


return fetch('/', options)
  .then(function(response) {
    return response.json()
  })
  .then(function(response) {
    console.log(response)
    return responseContainer.innerText = JSON.stringify(response)
  })
  .catch(function(error) {
    return responseContainer.innerText = JSON.stringify(error)
  })
}
