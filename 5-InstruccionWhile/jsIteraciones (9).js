function mostrar()
{
	var respuesta='si';
	var numero;
	var maximo;
	var esPrimeraIteracion = true;


	while(respuesta!='no')
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if(esPrimeraIteracion === true)
		{
			maximo=numero;
			esPrimeraIteracion=false;
		}
		else if(numero>maximo)
		{
			maximo=numero;
		}

		respuesta=prompt("Ingrese no para finalizar:");
	}




}//FIN DE LA FUNCIÓN