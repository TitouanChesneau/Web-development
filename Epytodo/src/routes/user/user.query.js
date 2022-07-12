var db = require('../../config/db');
const jwt = require('jsonwebtoken');

exports.all_user = function(res, id) {
    db.query('SELECT * FROM `user`', function(err, result, fields) {
        res.json(result);
    });
}

exports.all_todo = function(res, id) {
    db.query('SELECT * FROM todo WHERE user_id = ?', [id], function(err, result, fields) {
        res.json(result);
    })
}

exports.get_info_id_or_mail = function(res, data) {
    db.execute('SELECT * FROM user WHERE email = ?', [data], function(err, result, fields) {
        if (result.length > 0) {
            res.json(result);
        } else {
            db.execute('SELECT * FROM user WHERE id = ?', [data], function(err, result, fields) {
                res.json(result);
            });
        }
    });
}

exports.delete_user = function(res, id) {
    db.execute('DELETE FROM `user` WHERE id = ?', [id], function(err, result, fields) {
        res.json({msg: `succesfully deleted record number: ${id}`});
    });
}

exports.update_user = function(res, id, email, pasorwd, name, firstname) {
    db.execute('UPDATE `user` SET email = ?, password = ?, name = ?, firstname = ? WHERE id = ?', [email, password, name, firstname, id], function(err, result, fields) {
        db.execute('SELECT id, email, password, created_at, firstname, name FROM user WHERE id = ?', [id], function(err, result, fields) {
            res.json(results);
        });
    });
}