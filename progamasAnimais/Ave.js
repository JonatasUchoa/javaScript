const Vertebrado = require('./Animal')

class Ave extends Vertebrado {
    temPenas () {
        console.log(respirar(),"e tem penas");
    }
}

module.exports = Ave;