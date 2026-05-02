function sumarElementos(){
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value

    let resultado = (parseInt(num1) + parseInt(num2)) //se usa parseInt porque si no es como si se sumaran enteros
    document.getElementById("pResultado").innerHTML = resultado
}