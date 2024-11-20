const scriptURL = 'https://script.google.com/macros/s/AKfycbzZpIniyIRrMLMqTQ58C1r2j8GAQvWB6Pe4JskMSSN5qLm31Kr-LYtdXOtqY7gVVI-fuw/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Patient Details Added Successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
