let service = require("../services/projectService");

const getProjects = (res) => {
    service.getAllProjects(res);
}

const insertProject = (project, res) => {
    service.inserProject(project, res);
}

module.exports = {getProjects,insertProject}