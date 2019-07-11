function mostrar()
{
    //tomo la edad  
    var edad;
    var mostrar;

    edad=document.getElementById("edad").value;

    edad=parseInt(edad);

    if(edad>17){
        alert("su edad es "+edad)
    }else{
        alert("usted es menor de edad")
    }


}//FIN DE LA FUNCIÓN