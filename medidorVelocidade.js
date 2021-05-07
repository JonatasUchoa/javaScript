// velocidade máxima 70 e a cada 5 mais você ganha 1 ponto na carteira
// caso pontos maior que 12 a carteira é suspensa

function pontos(velocidadeMedida){
    if (velocidadeMedida < 75)
        return 0;
    if (velocidadeMedida >= 130)
        return "maior que 12, carteira suspensa"
    else
        return (velocidadeMedida-75)/5
}


let velocidade = 81;

console.log("sua pontuação foi:",Math.floor(pontos(velocidade)))

