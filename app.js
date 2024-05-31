// Cuando se carga la página, configuramos la validación personalizada
window.onload = function() {
    // Obtener referencias a los elementos de entrada y mensajes de error para el número y la serie
    const miNumeroInput = document.getElementById('miNumero');
    const miNumeroError = document.getElementById('miNumeroError');
    const miSerieInput = document.getElementById('miSerie');
    const miSerieError = document.getElementById('miSerieError');
    
    // Función para verificar el formato del número
    miNumeroInput.addEventListener('input', function() {
        if (!this.checkValidity()) {
            miNumeroError.textContent = 'Formato no válido';
            this.classList.add('invalid');
        } else {
            miNumeroError.textContent = '';
            this.classList.remove('invalid');
        }
    });
    
    // Función para verificar el formato de la serie
    miSerieInput.addEventListener('input', function() {
        if (!this.checkValidity()) {
            miSerieError.textContent = 'Formato no válido';
            this.classList.add('invalid');
        } else {
            miSerieError.textContent = '';
            this.classList.remove('invalid');
        }
    });
  };
  
  // Variables para almacenar los números y series premiados
  let chollazoNumber = null;
  let chollazoSerie = null;
  let primerPremioNumber = null;
  let primerPremioSerie = null;
  let segundoPremioNumber = null;
  let segundoPremioSerie = null;
  
  // Generar números y series aleatorias para los premios
  function generateRandom(type) {
      let number = Math.floor(Math.random() * 90000) + 10000;
      let serie = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  
      switch (type) {
          case 'chollazo':
              while (number === chollazoNumber && serie === chollazoSerie) {
                  number = Math.floor(Math.random() * 90000) + 10000;
                  serie = String.fromCharCode(65 + Math.floor(Math.random() * 26));
              }
              chollazoNumber = number;
              chollazoSerie = serie;
              break;
          case 'primerPremio':
              while (number === primerPremioNumber && serie === primerPremioSerie) {
                  number = Math.floor(Math.random() * 90000) + 10000;
                  serie = String.fromCharCode(65 + Math.floor(Math.random() * 26));
              }
              primerPremioNumber = number;
              primerPremioSerie = serie;
              break;
          case 'segundoPremio':
              while (number === segundoPremioNumber && serie === segundoPremioSerie) {
                  number = Math.floor(Math.random() * 90000) + 10000;
                  serie = String.fromCharCode(65 + Math.floor(Math.random() * 26));
              }
              segundoPremioNumber = number;
              segundoPremioSerie = serie;
              break;
      }
      let textoBoton = "";
  
      // Obtener el texto del botón después de cambiar su contenido
      if (type === "chollazo") {
          textoBoton = "Chollazo";
      } 
      else if (type === "primerPremio") {
          textoBoton = "Primer Premio";
      } 
      else if (type === "segundoPremio") {
          textoBoton = "Segundo Premio";
      }
  
  
      // Mostrar el nuevo contenido en el botón
      document.getElementById(type).innerHTML = `<b>${textoBoton}:</b> ${number} - ${serie}`;
  }
  
  
  // Comprobar si el número y serie introducidos coinciden con alguno de los premiados
  function checkResult() {
    // Obtener los valores introducidos por el usuario
    const miNumero = document.getElementById('miNumero').value;
    const miSerie = document.getElementById('miSerie').value.toUpperCase();
  
    // Validar el formato del número y serie
    if (!miNumero.match(/^\d{5}$/) || !miSerie.match(/[A-Za-z]/)) {
        document.getElementById('resultado').innerHTML = "Formato no válido";
        return;
    }
  
    // Convertir el número a entero para la comparación
    miNumeroInt = parseInt(miNumero);
    
    let mensaje = '';
  
     // Comprobar si el número y serie introducidos coinciden con algún premio
    if (miNumeroInt === chollazoNumber && miSerie === chollazoSerie) {
        mensaje = "Premiado con el Chollazo";
        document.getElementById('formulario').style.display = 'block'; 
        document.getElementById('formulario').classList.add('chollazo-color'); 
    } else if (miNumeroInt === primerPremioNumber && miSerie === primerPremioSerie) {
        mensaje = "Has conseguido el Primer Premio";
        document.getElementById('formulario').style.display = 'block'; 
        document.getElementById('formulario').classList.add('primer-premio-color');
    } else if (miNumeroInt === segundoPremioNumber && miSerie === segundoPremioSerie) {
        mensaje = "Has conseguido el 2º Premio";
        document.getElementById('formulario').style.display = 'block'; 
        document.getElementById('formulario').classList.add('segundo-premio-color'); 
    } else {
        mensaje = "Tu número no ha sido premiado";
    }
  
  // Mostrar el resultado al usuario
    document.getElementById('resultado').innerHTML = mensaje;
  }
  
  // Recargar la página para introducir otro número
  function reloadPage() {
    location.reload();
  }
  
  // Validar el formulario antes de enviarlo
  function validateForm() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
  
    // Validar el formato del nombre
    if (!nombre.match(/^[A-Za-z\s]{1,40}$/)) {
        alert("El nombre solo puede contener letras y tener máximo 40 caracteres.");
        return false;
    }
  
    // Validar el formato de los apellidos
    if (!apellidos.match(/^[A-Za-z\s]{1,40}$/)) {
        alert("Los apellidos solo pueden contener letras y tener máximo 40 caracteres.");
        return false;
    }
  
    // Validar el formato del teléfono (número de 9 dígitos)
    if (!telefono.match(/^\d{9}$/)) {
        alert("Formato de teléfono inválido. Por favor, introduce un número de teléfono válido para España.");
        return false;
    }
  
    // Validar el formato del correo electrónico
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert("Formato de correo electrónico inválido. Por favor, introduce una dirección de correo válida.");
        return false;
    }
  
    // Si todos los campos son válidos, permitir el envío del formulario
    return true;
  }
  