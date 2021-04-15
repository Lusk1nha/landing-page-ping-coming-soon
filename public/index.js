const btnNotify = document.querySelector('.notifyBtn')

btnNotify.onclick = () => {
  const inputContainer = document.querySelector('.inputContainer')
  const inputEmail = document.querySelector('.emailInput')

  const inputValue = inputEmail.value
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const validationResult = regEx.test(inputValue)

  inputEmail.value = ''
  if ( validationResult ) {
    inputContainer.classList.add('valid')
    inputContainer.classList.remove('invalid')

    return inputEmail.placeholder = ':) valid email'


  } else {
    inputContainer.classList.add('invalid')
    inputContainer.classList.remove('valid')

    return inputEmail.placeholder = 'example@email/com'
    
  }
}
