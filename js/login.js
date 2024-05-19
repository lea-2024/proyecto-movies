const errorEmail = document.querySelector("#errorEmail");
const errorPassword = document.querySelector("#errorPassword");
const formLogin = document.querySelector("#formLogin");

let validarEmail = false;
let validarPassword = false;



// Caputar el evento submit del formulario
formLogin.addEventListener('submit', (event) => {
  console.log('Hiciste click en ingresar');
  validateForm(event);
});


// Validación del formulario
const validateForm = (event) => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // expresión regular para validar email en formato correcto


  // Validar email, vacio, formato correcto
  if (email.trim() === '') {
    event.preventDefault();
    messageError('El email es obligatorio', errorEmail);
  } else if (!emailRegex.test(email)) {
    event.preventDefault();
    messageError('Ingrese un email válido', errorEmail);
  } else {
    clearError(errorEmail);
    validarEmail = true;
  };

  // Validar password , vacio, minimo de 8 caracteres, sin espacios
  if (password === '') {
    event.preventDefault();
    messageError('La contraseña es obligatoria', errorPassword);
  } else if (password.length < 8) {
    event.preventDefault();
    messageError('Ingrese un mínimo de 8 caracteres', errorPassword);
  } else if (password.includes(' ')) {
    event.preventDefault();
    messageError('La contraseña no debe contener espacios', errorPassword);
  } else {
    clearError(errorPassword);
    validarPassword = true;
  };

  // LLamaa a función Mensaje de exito validaciones
  if (validarEmail && validarPassword) {
    event.preventDefault();
    messageSuccess();
  };
};

// Mensaje de error validaciones
const messageError = (message, element) => {
  element.innerHTML = message;
  element.className = 'text-danger fs-6 mt-1 ms-1';
};

// Limpiar errores de validación
const clearError = (element) => {
  element.innerHTML = '';
};

// Mensaje de éxito sweetAlert 2
const messageSuccess = () => {
  let timerInterval;
  Swal.fire({
    title: "Datos Correctos",
    html: "<p class='text-center'>Iniciando sesión</p>",
    timer: 3000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      location.href = "https://lea-2024.github.io/proyecto-movies/";
    }
  });
}