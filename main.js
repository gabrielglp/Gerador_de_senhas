let sliderElement = document.querySelector('#slider')
let buttonElement = document.querySelector('#button')

let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')

let containerPasswordo = document.querySelector('#container-password')

let charset =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@$%&Ç'
let novaSenha = ''

sizePassword.innerHTML = sliderElement.value

slider.oninput = function () {
  sizePassword.innerHTML = this.value //forma de atualizar o valor dos caracteres
}

function generatePassword() {
  let pass = ''
  for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n)) //+=(mais igual) para concatenar a senha - logo apos é uma forma de gerar numero aleatorio da posição charset
  }

  containerPasswordo.classList.remove('hide')
  password.innerHTML = pass
  novaSenha = pass
}

function copyPassword() {
  alert('Senha copiada com sucesso!')
  navigator.clipboard.writeText(novaSenha) // forma de copiar ao clicar na senha.
}
