//Al cargar la página mostrará durante 5 segundos el elementio de id heart y luego hará el main visible

window.onload = function() {
    setTimeout(function() {
        document.getElementById('heart').style.opacity = '0';
        //document.getElementById('heart').style.display = 'none';
        //document.querySelector('main').style.display = 'block';
        document.querySelector('main').style.opacity = '1';
        //Cambiar el color de fondo con la propiedad background-color

    }, 5000);

    setTimeout(function() {
        document.querySelector('main').style.opacity = '1';
    }, 10000);
}
