window.onload = function() {
  var form = document.getElementById('registroForm');
  form.onsubmit = function(event) {
    var bool = true;
    var errores = [];

    // Limpiar mensajes de error
    document.getElementById('error-nombre').innerHTML = '';
    document.getElementById('error-email').innerHTML = '';
    document.getElementById('error-password').innerHTML = '';
    document.getElementById('error-edad').innerHTML = '';
    document.getElementById('error-telefono').innerHTML = '';
    document.getElementById('error-direccion').innerHTML = '';
    document.getElementById('error-ciudad').innerHTML = '';
    document.getElementById('error-codigo_postal').innerHTML = '';
    document.getElementById('error-dni').innerHTML = '';

    //Nombre completo: Debe tener más de 6 letras y al menos un espacio entre medio.
    var nombre = document.getElementById('nombre').value;
    if (nombre.length < 7 || nombre.indexOf(' ') === -1) {
      document.getElementById('error-nombre').innerHTML = 'Debe tener mas de 6 letras y al menos un espacio';
      errores.push('Nombre: Debe tener mas de 6 letras y al menos un espacio');
      bool = false;
    }

    //Email: debe tener un formato de email válido.
    var email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.')) {
      document.getElementById('error-email').innerHTML = 'Mail invalido';
      errores.push('Email: Mail invalido');
      bool = false;
    }

    //Contraseña: Al menos 8 caracteres, formados por letras y números.
    var password = document.getElementById('password').value;
    var letras = false;
    var numeros = false;
    for (var i = 0; i < password.length; i++) {
      var char = password[i];
      if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
        letras = true;
      }
      if (char >= '0' && char <= '9') {
        numeros = true;
      }
    }
    if (password.length < 8 || !letras || !numeros) {
      document.getElementById('error-password').innerHTML = 'Al menos 8 caracteres,letras o números';
      errores.push('Contraseña: Al menos 8 caracteres, letras o números');
      bool = false;
    }

    //Edad: Número entero mayor o igual a 18.
    var edad = parseInt(document.getElementById('edad').value, 10);
    if (isNaN(edad) || edad < 18) {
      document.getElementById('error-edad').innerHTML = 'Debe ser mayor a 18';
      errores.push('Edad: Debe ser mayor a 18');
      bool = false;
    }

    //Teléfono: Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.
    var telefono = document.getElementById('telefono').value;
    if (telefono.length >= 7) {
      for (var i = 0; i < telefono.length; i++) {
        if (telefono[i] == ' ' || telefono[i] == '-' || telefono[i] == '(' || telefono[i] == ')') {
          document.getElementById('error-telefono').innerHTML = 'No se permiten espacios, guiones ni paréntesis';
          errores.push('Teléfono: No se permiten espacios, guiones ni paréntesis');
          bool = false;
          break;
        }
      }
    } else {
      document.getElementById('error-telefono').innerHTML = 'Debe tener al menos 7 dígitos';
      errores.push('Teléfono: Debe tener al menos 7 dígitos');
      bool = false;
    }

    //Dirección: Al menos 5 caracteres, con letras, números y un espacio en el medio.
    var direccion = document.getElementById('direccion').value;
    var letrasDir = false;
    var numerosDir = false;
    var espacio = direccion.indexOf(' ') !== -1;
    for (var i = 0; i < direccion.length; i++) {
      var char = direccion[i];
      if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
        letrasDir = true;
      }
      if (char >= '0' && char <= '9') {
        numerosDir = true;
      }
    }
    if (direccion.length < 5 || !letrasDir || !numerosDir || !espacio) {
      document.getElementById('error-direccion').innerHTML = 'Al menos 5 caracteres, con letras, números y un espacio.';
      errores.push('Dirección: Al menos 5 caracteres, con letras, números y un espacio.');
      bool = false;
    }

    //Ciudad: Al menos 3 caracteres.
    var ciudad = document.getElementById('ciudad').value;
    if (ciudad.length < 3) {
      document.getElementById('error-ciudad').innerHTML = 'Al menos 3 caracteres.';
      errores.push('Ciudad: Al menos 3 caracteres.');
      bool = false;
    }

    //Código Postal: Al menos 3 caracteres.
    var cp = document.getElementById('codigo_postal').value;
    if (cp.length < 3) {
      document.getElementById('error-codigo_postal').innerHTML = 'Al menos 3 caracteres.';
      errores.push('Código Postal: Al menos 3 caracteres.');
      bool = false;
    }

    //DNI: Número de 7 u 8 dígitos.
    var dni = document.getElementById('dni').value;
    if (dni.length < 7 || dni.length > 8 || isNaN(dni)) {
      document.getElementById('error-dni').innerHTML = 'Debe ser un número de 7 u 8 dígitos.';
      errores.push('DNI: Debe ser un número de 7 u 8 dígitos.');
      bool = false;
    }

    
    
    if (!bool) {
      event.preventDefault();
      var mensajeErrores = 'Errores:\n';
      for (var i = 0; i < errores.length; i++) {
        mensajeErrores += errores[i] + '\n';
      }
      alert(mensajeErrores);
    } else {
      event.preventDefault();
      var datos = 
        'Nombre: ' + nombre + '\n' +
        'Email: ' + email + '\n' +
        'Contraseña: ' + password + '\n' +
        'Edad: ' + edad + '\n' +
        'Teléfono: ' + telefono + '\n' +
        'Dirección: ' + direccion + '\n' +
        'Ciudad: ' + ciudad + '\n' +
        'Código Postal: ' + cp + '\n' +
        'DNI: ' + dni;
      alert('Datos ingresados:\n' + datos);
    }
  };
};