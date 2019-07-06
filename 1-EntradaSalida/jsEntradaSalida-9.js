/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var resultado;
    var mostrarAumento

    sueldo=document.getElementById("sueldo").value;
    resultado=document.getElementById("resultado").value;

    sueldo=parseInt(sueldo);
    resultado=parseInt(resultado);

    mostrarAumento=sueldo+sueldo*10/100;
    alert("resultado "+mostrarAumento);
    
}
