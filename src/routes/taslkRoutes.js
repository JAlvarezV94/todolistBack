const taskModel = require('../models/task');

module.exports = function (app) {


    app.post('/task/newtask', function(req, res){
        
        const taskData = {
            name: req.body.name,
            priority: req.body.priority,
            endDate: req.body.endData
        };



        taskModel.insertTask(taskData, (err, data) => {
            res.status(200).json(data);
        });
    });

    app.get('/task/list', function(req, res){
        taskModel.getTasks((err, data) => {
            res.status(200).json(data);
        });
    });

    app.put('/task/update/:id', function(req, res){

        const taskData = {
            id: req.params.id,
            name: req.body.name,
            priority: req.body.priority,
            endDate: req.body.endDate,
            isDone: req.body.isDone
        }

        taskModel.updateTask(taskData, (err, data) => {
            res.status(200).json(data);
        })
    });

    app.delete('/task/delete/:id', function(req, res){
        taskModel.deleteTask(req.params.id, (err, data) => {
            res.status(200).json(data);
        });
    });
}