function mostrar()
{
//tomo la edad  
    var edad;
    var mostrar;
    var estadocivil;

    edad=document.getElementById("edad").value;

    edad=parseInt(edad);

    estadocivil=document.getElementById("estadoCivil").value;

    if (edad < 18 && estadocivil != "Soltero"){
        
        alert("usted es muy pequeño para no ser soltero");
    }

}//FIN DE LA FUNCIÓN