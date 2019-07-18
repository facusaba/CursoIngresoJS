function mostrar()
{
    var mes;
    var txt;

    mes = document.getElementById('mes').value;

    switch(mes){
        case "Febrero":
            txt = "este mes tiene 29 dias";
            break;
        default:
            txt = "este mes tiene 30 o mas dias";
            break;
    }

    alert(txt);
	
	


}//FIN DE LA FUNCIÓN