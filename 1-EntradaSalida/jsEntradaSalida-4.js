/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// Declaro la variable
	var nombre;
	// Guardo en la variable nombre el texto que ingresó el usuario por prompt
	nombre=prompt("Ingrese su nombre");
	// Guardo en el valor del  elemento con id "elNombre", el valor almacenado en la variable "nombre"
	document.getElementById("elNombre").value=nombre;

}

