const scriptURL = 'https://script.google.com/macros/s/AKfycbyRmmq4OaEdIk9PncsL6jJsoh0fDWbZfFn1-M2YgePEMFkFCDm9CMvX0GqWoQIi-XB3/exec'


const form = document.forms['employee-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Employee Details Added Successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
