function mostrar()
{
//tomo la edad  
    var mes;
    var txt;
    mes = document.getElementById('mes').value;

    switch(mes){
        case "Enero":
            txt = "que comiences bien el año!!!.";
            break;
        case "Marzo":
            txt = "a clases!!!.";
            break;
        case "Julio":
            txt = "se vienen las vacaciones!!!.";
            break;
        case "Diciembre":
            txt= "Felices fiesta!!!.";
            break;
    }
    
    alert(txt);


}//FIN DE LA FUNCIÓN