function mostrar()
{  
    var laHora;
    var txt;

    laHora = document.getElementById('hora').value;

    laHora = parseInt(laHora);
	
    switch(laHora){
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            txt = "es de mañana";
            break;
        default:
            txt = "no es de mañana";
            break;
    }

    alert(txt);

}//FIN DE LA FUNCIÓN