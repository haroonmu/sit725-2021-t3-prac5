let dbo = require("../db/conn");

let projectCollection;

setTimeout(() => {
    projectCollection = dbo.getDb().collection("projects");
}, 2000);

function getAllProjects(res) {
    projectCollection.find().toArray((err, result) => {
        if (err)
            throw err;
        res.send(result);
    });
}
const inserProjects = (project,res) =>{
    projectCollection.insertOne(project,(err, result)=>{
        if (err) throw err;
        res.send({result: 204});
    });
}
module.exports={getAllProjects, inserProjects};