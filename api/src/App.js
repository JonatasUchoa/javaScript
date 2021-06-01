const express = require('express');
const UserControlle = require('./contrelles/UserControlle');
const swaggweUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger.json');
const apiConstants = require('../src/enems/apiConstants');

class App{

    start(){
        this.setupExpress();
        this.loadControllers();
        this.startSever();
    }

    setupExpress(){
        this.express = express();

        this.express.use('${apiConstants.BASE_PATH}/docs',swaggweUi.serve, swaggweUi.setup(swaggerFile));

        this.express.use((req,res,next) => {
            console.log(req.method,req.url);
            next();
        })
    }

    loadControllers(){
        this.controlles = [
            new UserControlle(this.express)
        ];
    }

    startSever(){
        const port = 3001;
        this.express.listen(port,() => {
            console.log("Api em execução na porta",port);
        });
    }
    
}

module.exports = App;