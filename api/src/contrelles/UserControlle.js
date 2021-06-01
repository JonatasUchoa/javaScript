const BaseControlle = require ('./BaseControlle');

class UserControlle extends BaseControlle {
    setupRoutes(basePath){
        this.express.get("${basePath}/usuario", (req,res) => {
            this.get(req,res);
        });
    }

    get(req,res){
        return res.json({
            nome: 'jonatas',
            id: 1
        });
    }
}

module.exports = UserControlle;