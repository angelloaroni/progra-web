let esRojo = false
let tamañoBase = 16;
function cambiarColorCaja(){
    if (esRojo){
        document.getElementById("miCaja").style.backgroundColor="#3B82F6";
        esRojo = false;
    } else {
        document.getElementById("miCaja").style.backgroundColor="#ff2626";
        esRojo = true;
    }
}


function aumentarTamaño(){
    tamañoBase +=2
    document.getElementById("texto").style.fontSize = tamañoBase + "px"
}

function actualizarTexto(){
    const nuevoTexto = document.getElementById("inputTexto").value
    document.getElementById("texto").textContent = nuevoTexto
}
function modoOscuro(){

}