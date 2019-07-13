function mostrar()
{
    var numero1;
    var numero2;
    var resultado;

    numero1=prompt(numero1);
    numero2=prompt(numero2);

    if(numero1==numero2)
    {
        resultado=numero1+numero2;
    }else
        {
            if(numero1>numero2)
            {
               resultado=numero1-numero2;

            }else
                {
                    numero1=parseInt(numero1);
                    numero2=parseInt(numero2);

                    resultado=numero1+numero2;
                    
                    if(resultado>10)
                    {
                        alert("la suma es "+resultado+" y es mayor a 10")
                    }
                }
        }

    alert(resultado);

}
