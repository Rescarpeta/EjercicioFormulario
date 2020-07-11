var mensaje = document.getElementById('mensaje');
var usuario = document.getElementById('usuario');
var contrasena = document.getElementById('contrasena');
localstorage=window.localStorage;

function login(){
    if (usuario.value == "admin" && contrasena.value == "admin") {
        localstorage.setItem('user',usuario.value);
        location.href = "pagina1.html";
    }
    else { 
        location.href = "pagina1.html";
    }
}
function cerrar(){
    localStorage.removeItem('user');
    location.href = "index.html";

}


