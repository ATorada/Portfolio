//Al cargar la página mostrará durante 5 segundos el elementio de id heart y luego hará el main visible
window.onload = function () {
    if (getCookie("loading") == "") {
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
    
        createCookie("loading", "true", 5);
    } else {
        document.getElementById('heart').style.display = 'none';
        document.getElementById('yoSoy').style.display = 'none';
        document.querySelector('main').style.display = 'block';
        document.querySelector('main').style.opacity = '1';
    }
        
}
function createCookie(name, value, min) {
    var expires;
    if (min) {
        var date = new Date();
        date.setTime(date.getTime() + (min * 60000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}