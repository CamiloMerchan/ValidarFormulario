function name(params) {
    dolar=document.getElementById('dollar').value; 
    euro=document.getElementById('euros').value;
}


function convertir_a_euros(dollar)
{
numero = /[0-9\.]$/

if (!numero.exec(dollar))
{
alert("Esto no es un número");
}
{
euro = parseFloat(0.7641);
resultado = euro*parseFloat(dollar);
document.getElementById("total").innerHTML = dollar + " dollares son  " + resultado.toFixed(2) + " euros";
}
}