const Vertebrado = require('./Animal');
class Peixe extends Vertebrado {
    nadar () {
        console.log(respirar(),"e nada");
    }
}

module.exports = Peixe;