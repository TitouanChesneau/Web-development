var db = require('../config/db')

module.exports = (req, res, next) => {
    var id = req.params.id

    if (id) {
        let notfound = `SELECT * FROM todo WHERE id = ${id}`
        db.query(notfound, function(err, result, fields) {
            if (result.length > 0) {
                next();
            } else {
                res.status(404).json({msg: "Not found"});
            }
        });
    } else {
        res.status(500).json({msg: "Internal server error"});
    }
};