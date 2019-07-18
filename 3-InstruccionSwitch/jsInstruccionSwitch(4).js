function mostrar()
{
    var mes;
    var txt;

    mes = document.getElementById('mes').value;

    switch(mes){
        case "Febrero":
            txt = "tiene 28 dias";
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            txt = "tiene 30 dias";
            break;
        default:
            txt = "tiene 31 dias";
            break;
    }
    alert(txt);

}//FIN DE LA FUNCIÓN