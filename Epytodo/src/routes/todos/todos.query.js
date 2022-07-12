var db = require('../../config/db');

exports.all_todo = function(res) {
    db.query('SELECT * FROM `todo`', function(err, result) {
        res.json(result);
    });
}

exports.todo_id = function(res, id) {
    db.execute('SELECT * FROM `todo` WHERE id = ?', [id], function(err, result, fields) {
        res.json(result);
    });
}

exports.create_todo = function(res, title, description, duetime, id, status) {
    db.execute('INSERT INTO `todo` (title, description, due_time, status, user_id) VALUES (?, ?, ?, ?, ?)', [title, description, duetime, status, id], function(err, result, fields) {
        var id_task = result.insertId;
        db.execute('SELECT * FROM `todo` WHERE id = ?', [id_task], function(err, result, fields) {
            res.json(result);
        });
    });
}

exports.delete_task = function(res, id) {
    db.execute('DELETE FROM `todo` WHERE id = ?', [id], function(err, result, fields) {
        res.json({msg: `succesfully deleted record number: ${id}`});
    });
}

exports.update_task = function(res, id, title, desc, due_time ,user_id, status) {
    db.execute('UPDATE `todo` SET title = ?, description = ?, due_time = ?, user_id = ?, status = ? WHERE id = ?', [title, desc, due_time, user_id, status, id], function(err, result, fields) {
        db.execute('SELECT id, title, description, created_at, due_time, user_id, status FROM todo WHERE id = ?', [id], function(err, result, fields) {
            res.json(result);
        });
    });
}