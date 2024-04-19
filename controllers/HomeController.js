class HomeController{

    async index(req, res){
        res.send("API - EXEMPLO - USO EM MOBILE");
    }

}

module.exports = new HomeController();