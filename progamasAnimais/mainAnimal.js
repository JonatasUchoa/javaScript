const readline = require('readline');
const Vertebrado = require('./Animal');
const Peixe = require('./Peixe');
const Reptil = require('./Reptil');
const Mamifero = require('./Mamifero');
const Ave = require('./Ave');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const listaAnimais = [
    new Peixe ("tambaqui"),
    new Reptil ("cobra"),
    new Ave ('pombo'),
    new Mamifero ('gato')
]

leitor
    .question(
        "digite o nome de um animal vertebrado:\n",
        animalInformado => {
            try {
                animalSelecionado = Peixe.respirar(animalInformado);
                console.log(animalSelecionado);
            }catch(e){

            }
            finally{
                leitor.close();
            }
        }


           
    )
