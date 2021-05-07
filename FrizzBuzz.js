// divisível por 3: Frizz
// divisílvel por 5: Buzz
// divisível por 3 e 5 : FrizzBuzz
// não divisível por 3 e 5 : entrada
// não é um número : não é um número

let numero = "15";
let verificador;
function frizzBuzz(numero,verificador){
    verificador = Number.isInteger(parseInt(numero))
    if (verificador == false)
        return "digite um numero válido";
    if (numero % 3 == 0 && numero % 5 == 0)
        return "FrizzBuzz";
    
    else if (numero % 3 ==0 && !(numero % 5 == 0))
        return "Frizz";
    
    else if (numero % 5 ==0 && !(numero % 3 == 0))
        return "Buzz";
    
    else if (!(numero % 3 == 0) && !(numero % 5 == 0) )
        return numero;
}
console.log(frizzBuzz(numero,verificador));
