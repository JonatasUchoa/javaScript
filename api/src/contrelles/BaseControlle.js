const apiContants = require('../enems/apiConstants');

class BaseControlle{
    constructor(expressInstance){
        if(!expressInstance){
            throw new Error('a instancia do express é obrigatória');
        }

        this.express = expressInstance;
        this.setupRoutes(apiContants.BASE_PATH);
    }

    setupRoutes(){
        throw new Error('setupRoutes deve ser implementado');
    }
}

module.exports = BaseControlle;