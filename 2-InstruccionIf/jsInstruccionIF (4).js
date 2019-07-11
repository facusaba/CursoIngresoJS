function mostrar()
{
    //tomo la edad  
    var edad;
    var mostrar;

    edad=document.getElementById("edad").value;

    edad=parseInt(edad);

    if(edad>12 && edad<18){
        alert("usted es adolescente")
    }

}//FIN DE LA FUNCIÓN