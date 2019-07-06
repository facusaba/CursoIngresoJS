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
    alert("la suma es "+sumar);
	
}

//practicar con esto

function restar()
{
	var numero1Letra;
    var numero2Letra;
    var restar;
    var numeroConvertido1;
    var numeroConvertido2;
    
    numero1Letra=document.getElementById("numeroUno").value;
    numero2Letra=document.getElementById("numeroDos").value;

    numeroConvertido1=parseInt(numero1Letra);
    numeroConvertido2=parseInt(numero2Letra);

    restar=numeroConvertido1-numeroConvertido2;
    alert("la resta es "+restar);


}

function multiplicar()
{ 
	var numero1;
    var numero2;
    var multiplicar;
    dato=document.getElementById("numeroUno");

    numero1=document.getElementById("numeroUno").value;
    numero2=document.getElementById("numeroDos").value;

    numero1=parseInt(numero1);
    numero2=parseInt(numero2);

    multiplicar=numero1*numero2;
    alert("la suma es "+multiplicar);

}

function dividir()
{
	var numero1;
    var numero2;
    var dividir;
    dato=document.getElementById("numeroUno");

    numero1=document.getElementById("numeroUno").value;
    numero2=document.getElementById("numeroDos").value;

    numero1=parseInt(numero1);
    numero2=parseInt(numero2);

    dividir=numero1/numero2;
    alert("la suma es "+dividir);
}

