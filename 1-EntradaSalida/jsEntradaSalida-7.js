/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero1;
    var numero2;
    var sumar;

    numero1=document.getElementById("numeroUno").value;
    numero2=document.getElementById("numeroDos").value;

    numero1=parseInt(numero1);
    numero2=parseInt(numero2);

    sumar=numero1+numero2;
    alert("la respuesta es "+sumar);

}

function restar()
{
    var numero1;
    var numero2;
    var restar;

    numero1=document.getElementById("numeroUno").value;
    numero2=document.getElementById("numeroDos").value;

    restar=numero1-numero2;
    alert("la respuesta es "+restar);

}

function multiplicar()
{ 
    var numero1;
    var numero2;
    var multiplicar;

    numero1=document.getElementById("numeroUno").value;
    numero2=document.getElementById("numeroDos").value;

    multiplicar=numero1*numero2;
    alert("la respuesta es "+multiplicar);

}

function dividir()
{
    var numero1;
    var numero2;
    var dividir;

    numero1=document.getElementById("numeroUno").value;
    numero2=document.getElementById("numeroDos").value;

    dividir=numero1/numero2;
    alert("la respuesta es "+dividir);
    
}

