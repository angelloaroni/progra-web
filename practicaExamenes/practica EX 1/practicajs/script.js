let esRojo = false
let tamañoBase = 
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

}