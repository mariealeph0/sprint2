document.getElementById('iniciar').addEventListener('click', () => { open("paginaDos.html") });

let formulario = document.querySelector('#form');

formulario.addEventListener('submit', function LocalStorage() {

    let correo = document.getElementById('email').value;
    let contraseña = document.getElementById('password').value;

    localStorage.setItem('email', correo);
    localStorage.setItem('password', contraseña);

})

function ObtenerLocalStorage() {
    let emailGuardado = localStorage.getItem('email');
    let passwordGuardado = localStorage.getItem('password');


}