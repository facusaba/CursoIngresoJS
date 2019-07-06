/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1;
    var numero2;
    var sumar;
    // alert(numero1);//sale undefined
    //dato=document.getElementById("lalala").value; //sale null
    dato=document.getElementById("numeroUno").value;
    
    numero1=document.getElementById("numeroUno").value;
    numero2=document.getElementById("numeroDos").value;
    
    numero2=parseInt(numero1);
    numero1=parseInt(numero2);

    sumar=numero1+numero2;
    alert("la suma es:  "+sumar);


}

