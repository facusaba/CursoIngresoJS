function mostrar()
{
//tomo la edad  
var mes;
var txt;

mes = document.getElementById('mes').value;

switch(mes){
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
        txt = "Abrigate que es invierno";
        break;
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
        txt = "falta para el invierno";
        break;
    default:
        txt = "Ya pasamos el frio, ahora calor";
    break;

}

alert(txt);

}//FIN DE LA FUNCIÓN