const Vertebrado = require('./Animal');

class Mamifero extends Vertebrado {
    mamar(){
        console.log(respirar(),"e mama");
    }
}

module.exports = Mamifero;