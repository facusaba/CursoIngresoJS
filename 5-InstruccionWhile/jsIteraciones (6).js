function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	for (var i = 0; i < 5; i++)
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		acumulador += numero;
	}

	while(contador<5)
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		acumulador += numero;
		contador++;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN