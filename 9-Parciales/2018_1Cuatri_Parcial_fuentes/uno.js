
function mostrar()
{
    var base;
    var altura;
    var perimetro;

    base=prompt(base);
    altura=prompt(altura);

    base=parseInt(base);
    altura=parseInt(altura);

    perimetro=2*(base+altura);

    alert("perimetro es "+perimetro);
    
}
