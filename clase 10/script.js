window.onload = function() {
  var form = document.getElementById('registroForm');

  var saved = localStorage.getItem('datosUsuarioLS');
  if (saved) {
    try {
      var data = JSON.parse(saved);
      for (var key in data) {
        if (data.hasOwnProperty(key) && document.getElementById(key)) {
          document.getElementById(key).value = data[key];
        }
      }
    } catch (e) {}
  }

  form.onsubmit = function(event) {
    var bool = true;

    
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
      bool = false;
    }

    //Email: debe tener un formato de email válido.
    var email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.')) {
      document.getElementById('error-email').innerHTML = 'Mail invalido';
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
      bool = false;
    }

    //Edad: Número entero mayor o igual a 18.
    var edad = parseInt(document.getElementById('edad').value, 10);
    if (isNaN(edad) || edad < 18) {
      document.getElementById('error-edad').innerHTML = 'Debe ser mayor a 18';
      bool = false;
    }

    //Teléfono: Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.
    var telefono = document.getElementById('telefono').value;
    if (telefono.length >= 7) {
      for (var i = 0; i < telefono.length; i++) {
        if (telefono[i] == ' ' || telefono[i] == '-' || telefono[i] == '(' || telefono[i] == ')') {
          document.getElementById('error-telefono').innerHTML = 'No se permiten espacios, guiones ni paréntesis';
          bool = false;
          break;
        }
      }
    } else {
      document.getElementById('error-telefono').innerHTML = 'Debe tener al menos 7 dígitos';
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
      bool = false;
    }

    //Ciudad: Al menos 3 caracteres.
    var ciudad = document.getElementById('ciudad').value;
    if (ciudad.length < 3) {
      document.getElementById('error-ciudad').innerHTML = 'Al menos 3 caracteres.';
      bool = false;
    }

    //Código Postal: Al menos 3 caracteres.
    var cp = document.getElementById('codigo_postal').value;
    if (cp.length < 3) {
      document.getElementById('error-codigo_postal').innerHTML = 'Al menos 3 caracteres.';
      bool = false;
    }

    //DNI: Número de 7 u 8 dígitos.
    var dni = document.getElementById('dni').value;
    if (dni.length < 7 || dni.length > 8 || isNaN(dni)) {
      document.getElementById('error-dni').innerHTML = 'Debe ser un número de 7 u 8 dígitos.';
      bool = false;
    }

     
    if (!bool) {
      event.preventDefault();
      return false;
    }

     
    event.preventDefault();

    var datos = {
      nombre: nombre,
      email: email,
      password: password,
      edad: edad,
      telefono: telefono,
      direccion: direccion,
      ciudad: ciudad,
      codigo_postal: cp,
      dni: dni
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
    .then(function(response) {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then(function(data) {
      localStorage.setItem('datosUsuarioLS', JSON.stringify(datos));
      mostrarModal('Exito', data);
    })
    .catch(function(error) {
      if (typeof error.json === 'function') {
        error.json().then(function(errData) {
          mostrarModal('Error', errData);
        });
      } else {
        mostrarModal('Error', error);
      }
    });

    // ---------- modal 
    function mostrarModal(titulo, datos) {
            var viejo = document.getElementById('modal-suscripcion');
      if (viejo) viejo.parentNode.removeChild(viejo);

      var modal = document.createElement('div');
      modal.id = 'modal-suscripcion';

      var h2 = document.createElement('h2');
      h2.innerText = titulo;
      modal.appendChild(h2);

      if (datos) {
        var pre = document.createElement('pre');
        pre.innerText = JSON.stringify(datos, null, 2);
        modal.appendChild(pre);
      }

      var btn = document.createElement('button');
      btn.innerText = 'Cerrar';
      btn.onclick = function() {
        modal.parentNode.removeChild(modal);
      };
      modal.appendChild(btn);

      modal.style.position = 'fixed';
      modal.style.top = '50%';
      modal.style.left = '50%';
      modal.style.transform = 'translate(-50%, -50%)';
      modal.style.background = 'rgb(174, 195, 153)';
      modal.style.padding = '10px';
      modal.style.zIndex = '9999';

      document.body.appendChild(modal);
    }
  };
};