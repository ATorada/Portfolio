//Al cargar la página mostrará durante 5 segundos el elementio de id heart y luego hará el main visible

window.onload = function () {
    setTimeout(function () {
        document.getElementById('heart').style.opacity = '0';
    }, 5000);

    setTimeout(function () {
        document.getElementById('yoSoy').style.opacity = '1';
    }, 7000);

    setTimeout(function () {
        document.getElementById('yoSoy').style.opacity = '0';
        document.querySelector('main').style.display = 'block';
    }, 10000);

    setTimeout(function () {
        document.querySelector('main').style.opacity = '1';
    }, 14000);

}
