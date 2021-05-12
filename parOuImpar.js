// receber um valor referente a quantidade de vezes que deseja a verificação dos números começando do zero são impar ou par

function parOuImpar (numero){
    for (var i=0;i<=numero;i++){
        i % 2 == 0 ? console.log(i,"é par") : console.log(i,"é impar")
    }
}
parOuImpar(10);

