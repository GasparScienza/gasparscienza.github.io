let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true; 
    }
}
function seleccionar(){
    //ocultar menu al seleccionar
    document.getElementById("nav").classList="";
    menuVisible = false;
}

function mostrarImagen(src) {
    document.getElementById('imagenAmpliadaSrc').src = src;
    document.getElementById('imagenAmpliada').style.display = 'block';
}

function cerrarImagen() {
    document.getElementById('imagenAmpliada').style.display = 'none';
}