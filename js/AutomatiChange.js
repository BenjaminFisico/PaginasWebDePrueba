window.onload = function(){
    mostrar("slide1");
}

function mostrar(str){
    setTimeout(function() {
        elem = document.getElementById(str).setAttribute("style","opacity:1");
        quitar("slide3");   quitar("slide2");
        mostrar2("slide2");
    },4000);
};

function mostrar2(str){
    setTimeout(function(){
        elem = document.getElementById(str).setAttribute("style","opacity:1");
        quitar("slide3");   quitar("slide1");
        mostrar3("slide3");
    },4000);
}

function mostrar3(str){
    setTimeout(function(){
        elem = document.getElementById(str).setAttribute("style","opacity:1");
        quitar("slide1");   quitar("slide2");
        mostrar("slide1");
    },4000);
}

function quitar(str){
    elem = document.getElementById(str).setAttribute("style","opacity:0");
}