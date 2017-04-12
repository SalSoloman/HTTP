console.log('method.js here')

document.getElementById('main-form').addEventListener('submit', function(event){
  event.preventDefault()
  console.log('STOPPED FORM FROM SUBMITTING')

  const method = document.querySelector('.method-input').value
  const host = document.querySelector('.host-input').value
  const queryKey = document.querySelector('.Query-Keys').value
  const queryValue = document.querySelector('.Query-Value').value
  const headerKeys = document.querySelector('.Header-Keys').value
  const headerValue = document.querySelector('.Header-Values').value

  const requestSpec = {
    method,
    host,
    queryKey,
    queryValue,
    headerKeys,
    headerValue,
  }
  console.log('REQUEST SPECIFICATION', requestSpec)
})

  // fetch({
  //   method: 'POST',
  //   url: '/construct_request',
  //   body: JSON.stringify(requestSpec),
  // })
  //   .then(function(response) {
  //     return response.json()
  //   })
  //   .then(function(response) {
  //     console.log(response)
  //     return responseContainer.innerText = JSON.stringify(response)
  //   })
  //   .catch(function(error) {
  //     return responseContainer.innerText = JSON.stringify(error)
  //   })
  // }



//
// function fetchMethod() {
//   const method = document.querySelector('.method-input').value
//   const host = document.getElementById('host').value
//   const requestContainer = document.querySelector('.request-box')
//   const responseContainer = document.querySelector('.response-box')
// }
//
//
// const headers = new Headers({
//   "Content-Type": "application/json"
// })
//
// const options = {
//   method: 'POST',
//   headers,
//   body: JSON.stringify({
//     method,
//     host
//   })
// }
//
//
