// progama que recebe um número e imprime a soma de seus multiplos de 3 e 5;

function print(x){
    console.log(x);
}

function multiplo3_5(numero){
    let soma=0;
    for(let i=0;i<=numero;i++){
        if (i % 3 == 0){
            soma += i;
        }
        if (i % 5 == 0){
            soma+= i;
        }
    }
    return soma;
}

print(multiplo3_5());