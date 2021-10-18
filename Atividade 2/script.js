function validar(){
  const login = document.getElementById("login").value
  const pass = document.getElementById("pass").value
  const validar = (pass === '' || login === '')

  validar ? alert('Usuário e/ou Senha estão inválidos') : alert("Você será direcionado para nossa página principal.")
}