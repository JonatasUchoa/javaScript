const readline = require('readline');
const Vertebrado = require('./Animal');
const Peixe = require('./Peixe');
const Reptil = require('./Reptil');
const Mamifero = require('./Mamifero');
const Ave = require('./Ave');



const listaAnimais = [
    new Peixe ("tambaqui"),
    new Reptil ("cobra"),
    new Ave ('pombo'),
    new Mamifero ('gato')
]

argv[2]= animalSelecionado = Peixe.listaAnimais(animalInformado);
console.log(animalSelecionado);