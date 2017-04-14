console.log('method.js here')

document.getElementById('main-form').addEventListener('submit', function(event){
  event.preventDefault()
  console.log('STOPPED FORM FROM SUBMITTING')

  const method = document.querySelector('.method-input').value
  const host = document.querySelector('.host-input').value
  const queryKey1 = document.querySelector('.Query-Keys1').value
  const queryKey2 = document.querySelector('.Query-Keys2').value
  const queryKey3 = document.querySelector('.Query-Keys3').value
  const queryValue1 = document.querySelector('.Query-Value1').value
  const queryValue2 = document.querySelector('.Query-Value2').value
  const queryValue3 = document.querySelector('.Query-Value3').value
  const headerKeys1 = document.querySelector('.Header-Keys1').value
  const headerKeys2 = document.querySelector('.Header-Keys2').value
  const headerKeys3 = document.querySelector('.Header-Keys3').value
  const headerValue1 = document.querySelector('.Header-Values1').value
  const headerValue2 = document.querySelector('.Header-Values2').value
  const headerValue3 = document.querySelector('.Header-Values3').value

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


let request = new Request {
      host,
      queryKey,
      queryValue,
      headerKeys,
      headerValue,
}
console.log(request)



//
// let request = new Request('http://localhost3001', {
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
