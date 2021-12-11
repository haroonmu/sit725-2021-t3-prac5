var express = require("express");
var router = express.Router();

let controller = require ("../controller/projectController")

    router.get("/", (req, res) =>{
       controller.getProjects(res);
   });

   router.post("/", (req, res)=> {
    controller.insertProject(req.body,res);

});

module.exports = router;