const {create_todo, all_todo, todo_id, delete_task, update_task} = require('./todos.query');
const auth = require('../../middleware/auth');
const verif_id = require('../../middleware/notFound');

module.exports = function(app, bcrypt) {
    app.get('/todos', auth, (req, res) => {
        all_todo(res);
    });
    app.get('/todos/:id', auth, verif_id, (req, res) => {
        var id = req.params.id;

        todo_id(res, id);
    });
    app.post('/todos', auth, (req, res) => {
        var title = req.body.title;
        var description = req.body.description;
        var due_time = req.body.due_time;
        var user_id = req.body.user_id;
        var status = req.body.status;

        if (title === undefined || description === undefined  ||
        due_time === undefined || user_id === undefined || status === undefined) {
            res.status(500).json({msg: "Internal server error"});
            return;
        }
        create_todo(res, title, description, due_time, user_id, status);
    });
    app.delete('/todos/:id', auth, (req, res) => {
        var id = req.params.id;

        delete_task(res, id);
    });
    app.put('/todos/:id', auth, (req, res) => {
        var id = req.params.id;
        var title = req.body.title;
        var desc = req.body.description;
        var due_time = req.body.due_time;
        var user_id = req.body.user_id;
        var status = req.body.status;

        if (id === undefined || title === undefined || desc === undefined  ||
        due_time === undefined || user_id === undefined ||
        status === undefined) {
            res.status(500).json({msg: "Internal server error"});
            return;
        }
        update_task(res, id, title, desc, due_time, user_id, status);
    })
}