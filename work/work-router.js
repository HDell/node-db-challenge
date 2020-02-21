//set up
const express = require('express');
//routes
const router = express.Router();
//model import
const WorkModel = require('./work-model.js');
//CRUD
router.post('/projects', (req, res) => {
    const project = req.body;
    if(project.name && project.completed) {
        WorkModel.addProject(project).then(response => {
            res.status(201).json(response);
        }).catch(err => {
            console.log(err);
            res.status(500).json({err: "Sorry. THe server experienced an error."});
        });
    } else {
        res.status(400).json({err: "Project is missing name and/or completed value."});
    }
});
router.get('/projects', (req, res) => {
    WorkModel.getProject().then(response => {
        res.status(200).json(response);
    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "Sorry. The server experienced an error."});
    });
});
router.post('/tasks', (req, res) => {
    const task = req.body;
    if(task.description && task.completed && task.project_id) {
        WorkModel.addTask(task).then(response => {
            res.status(201).json(response);
        }).catch(err => {
            console.log(err);
            res.status(500).json({err: "Sorry. THe server experienced an error."});
        });
    } else {
        res.status(400).json({err: "Task is missing description, completed value, and/or project id."});
    }
});
router.get('/tasks', (req, res) => {
    WorkModel.getTask().then(response => {
        res.status(200).json(response);
    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "Sorry. The server experienced an error."});
    });
});
router.post('/resources', (req, res) => {
    const resource = req.body;
    if(resource.name) {
        WorkModel.addResource(resource).then(response => {
            res.status(201).json(response);
        }).catch(err => {
            console.log(err);
            res.status(500).json({err: "Sorry. THe server experienced an error."});
        });
    } else {
        res.status(400).json({err: "Resource is missing name."});
    }
});
router.get('/resources', (req, res) => {
    WorkModel.getResource().then(response => {
        res.status(200).json(response);
    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "Sorry. The server experienced an error."});
    });
});
