function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var number;

	number=Math.floor(Math.random() * (11-1)) + 1;

	number=parseInt(number);

	if(number<4){
		alert("Vamos, la proxima se puede. Su nota es "+number)
	}else{
		alert("Aprobado. Su nota es "+number)
		}if(number>9){
			alert("Excelente! su nota es "+number)
			}

}//FIN DE LA FUNCIÓN