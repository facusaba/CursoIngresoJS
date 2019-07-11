function mostrar()
{
//tomo la edad  
    var edad;
    
    edad=document.getElementById("edad").value;

    edad=parseInt(edad);

    if(edad<12){
        alert("usted es niño");
    }else{
        if(edad>18){
            alert("usted es adulto")
        }else{
            alert("usted es adolescente")
        }
    }


}//FIN DE LA FUNCIÓN