const knex = require('knex');
const configOptions = require('../knexfile.js').development;
const db = knex(configOptions);

module.exports = {
    addProject,
    getProject,
    addResource,
    getResource,
    addTask,
    getTask
};

function addProject(project) {
    return db("projects")
        .add(project)
        .then(ids => {
            return {id: ids[0]};
        });
}

function getProject() {
    return db("projects");
}

function addTask(task) {
    return db("tasks")
        .add(task)
        .then(ids => {
            return {id: ids[0]};
        });
}

function getTask() {
    return db("tasks");
}

function addResource(resource) {
    return db("resources")
        .add(resource)
        .then(ids => {
            return {id: ids[0]};
        });
}

function getResource() {
    return db("resources");
}
