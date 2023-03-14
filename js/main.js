//Menu lateral
var menu_visible=false;
let menu= document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//Si esta oculto
        menu.style.display ="block";
        menu_visible= true;
    }
    else{
        menu.style.display ="none";
        menu_visible = false;
    }
}
//oculta el menu cuando selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x=0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display ="none";
        menu_visible= false;
    }
}
//Creo barra identificada por id
function crearBarra(id_barra){
    for(i=0; i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
//Selecciono todas la barras generales para luego manipularlas
let MIPG = document.getElementById("MIPG");
crearBarra(MIPG);

let mecanica = document.getElementById("mecanica");
crearBarra(mecanica);

let programacion = document.getElementById("programacion");
crearBarra(programacion);

let apicultura = document.getElementById("apicultura");
crearBarra(apicultura);

//Conteno de la barra por habilidad
//comienza en -1 por que no tiene niguna pintada al iniciar
let contadores = [-1,-1,-1,-1,-1,-1]
//variable de prueba para la ejecución de la animación
let entro=false;
//funcion para activar animación de barra
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalMipg = setInterval(function(){
            pintarBarra(MIPG, 16, 0, intervalMipg);
        },100);
        const intervalMecanica = setInterval(function(){
            pintarBarra(mecanica, 14, 1, intervalMecanica);
        },100);
        const intervalProgramacion = setInterval(function(){
            pintarBarra(programacion, 14, 2, intervalProgramacion);
        },100);
        const intervalApicultura = setInterval(function(){
            pintarBarra(apicultura, 14, 3, intervalApicultura);
        },100)

    }
}
//llenar barra en particular
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if (x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scroll para activar la animación
window.onscroll = function (){
    efectoHabilidades();
}