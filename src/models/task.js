const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todolistdb'
});

let taskModel = {};

taskModel.insertTask = (taskData, callback) => {
    if(connection){
        let query = `INSERT INTO tasks(name, priority, is_done, created_at, end_date) VALUES ('${taskData.name}', ${taskData.priority}, 0, now(), '${taskData.endDate}');`;

        connection.query(query, (err, result) => {
            if(err) throw err;

            callback(null, result);
        });
    }
};

taskModel.getTasks = (callback) => {

    if(connection){
        let query = 'SELECT * FROM tasks ORDER BY id';

        connection.query(query, (err, result) => {
            if(err) throw err;

            callback(null, result);
        });
    }
}

taskModel.updateTask = (taskData, callback) => {
    if(connection){
        let query = `UPDATE tasks SET name = '${taskData.name}', priority = ${taskData.priority}, is_done = ${taskData.isDone}, end_date = '${taskData.endDate}' WHERE id = ${taskData.id}`;
        connection.query(query, (err, result) => {
            if(err) throw err;

            callback(null, result);
        });
    }
};

taskModel.deleteTask = (id, callback) => {
    if(connection){
        let query = `DELETE FROM tasks WHERE id = ${id}`;

        connection.query(query, (err, result) => {
            if(err) throw err;

            callback(null, result);
        });
    }
};


module.exports = taskModel;