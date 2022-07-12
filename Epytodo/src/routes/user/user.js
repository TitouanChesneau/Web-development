const {all_user, all_todo, get_info_id_or_mail, delete_user, update_user} = require('./user.query');
const auth = require('../../middleware/auth');

module.exports = function(app, bcrypt) {
    app.get('/user', auth, (req, res) => {
        all_user(res);
    });
    app.get('/user/todos', auth, (req, res) => {
        all_todo(res, req.user);
    });
    app.get('/users/:id', auth, (req, res) => {
        var data = req.params.data;

        get_info_id_or_mail(res, data);
    });
    app.delete('/users/:id', auth, (req, res) => {
        var id = req.params.id;

        delete_user(res, id);
    });
    app.put('/users/:id', auth, (req, res) => {
        var id = req.params.id;
        var mail = req.body.email;
        var name = req.body.name;
        var firstname = req.body.firstname;
        var password = req.body.password;

        if (id === undefined || mail === undefined || name === undefined  ||
            firstname === undefined || password === undefined) {
            res.status(500).json({msg: "Internal server error"});
            return;
        }
        password = bcrypt.hashSync(password, 10);
        update_user(res, id, mail, password, name, firstname);
    });
}