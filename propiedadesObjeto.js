// progama para ler as propiedades do objeto e exibir somente as do tipo String

function imprimir (x){
    console.log(x) ;  
}

const carro = {
    ano: "2020",
    nome: "civic",
    marca: "honda",
    nDePortas: 4,
    temMultas : true
}

for(prop in carro){  
    if ( typeof carro[prop] == "string"){
        imprimir(carro[prop]); 
    } 
}