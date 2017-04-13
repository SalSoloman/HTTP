console.log('method.js here')

document.getElementById('main-form').addEventListener('submit', function(event){
  event.preventDefault()
  console.log('STOPPED FORM FROM SUBMITTING')

  const method = document.querySelector('.method-input').value
  const host = document.querySelector('.host-input').value
  // const queryKey = document.querySelector('.Query-Keys').value
  // const queryValue = document.querySelector('.Query-Value').value
  // const headerKeys = document.querySelector('.Header-Keys').value
  // const headerValue = document.querySelector('.Header-Values').value
  // const responseContainer = document.querySelector('.response-container')

  fetch('/request', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      method,
      host,
    })
  })
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(responsePayload => {
    console.log(responsePayload)
  })

//
// let request = new Request('http://localhost3001', {
//     method,
//     host,
//     queryKey,
//     queryValue,
//     headerKeys,
//     headerValue,
//   })
//   fetch(request)
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(response) {
//     return responseContainer.innerText = JSON.stringify(response)
//   })
//   .catch(function(error) {
//     return responseContainer.innerText = JSON.stringify(error)
//   })
//   // console.log('REQUEST SPECIFICATION', requestSpec)
})
