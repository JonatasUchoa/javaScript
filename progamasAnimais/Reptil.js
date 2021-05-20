const Vertebrado = require('./Animal');

class Reptil extends Vertebrado {
    rastejar(){
        console.log(respirar(),"e rasteja");
    }
}

module.exports = Reptil;