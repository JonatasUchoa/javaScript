// configurar nosso express
// criar o controller para receber a requisição
// devolver para o usuário os dados dele via json
// swagger

const App = require('./src/App');

const api = new App();
api.start();