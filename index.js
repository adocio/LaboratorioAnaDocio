function validateForm() {
  var clave = document.getElementById("Clave");
  var ConfirmarClave = document.getElementById("ConfirmarClave");
  
  if (clave.value !== ConfirmarClave.value) {
    ConfirmarClave.setCustomValidity("Las claves no coinciden.");
  } else {
    ConfirmarClave.setCustomValidity("");
  }
  
  return ConfirmarClave.validity.valid;
}
