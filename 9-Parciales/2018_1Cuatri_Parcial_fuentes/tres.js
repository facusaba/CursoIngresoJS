function mostrar()
{
    var precio;
    var descuento;
    var resultado;

    precio=prompt(precio);
    descuento=prompt(descuento);

    precio=parseInt(precio);
    descuento=parseInt(descuento);

    resultado=precio-precio*descuento/100;

    document.getElementById("elPrecioFinal").value=resultado;
    
}
