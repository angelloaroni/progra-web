//en caso de sumas coesectuvias, se necesita un valor para ir agregando los valores
let sumando2 = 0

function sumaConsecutiva(){
    const num1 = document.getElementById("num1").value
    const resultado = parseInt(num1) + sumando2

    document.getElementById('pResultado').innerHTML = resultado

    sumando2 = resultado
    //se vuelve a dejar el input vacio pra poder ingresar un nuevo numero y sumarlo al total acummulado
    document.getElementById('num1').value = ""
}