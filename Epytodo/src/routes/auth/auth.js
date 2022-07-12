const db = require('../../config/db');
var jwt = require('jsonwebtoken');
const express = require('express');
require('dotenv').config();

module.exports = function(app, bcrypt) {

    function generateToken(user) {
        return jwt.sign({user}, process.env.SECRET);
    }

    app.post('/register', (req, res) => {
        let email = req.body.email;
        let password = req.body.password;
        let name = req.body.name;
        let firstname = req.body.firstname;

        if (email === undefined || name === undefined || firstname === undefined || password === undefined)
            return res.status(401).json({msg: "Bad parameter"})
        password = bcrypt.hashSync(password, 10);
        let register1 = `SELECT email FROM user WHERE email = "${email}"`
        db.query(register1, function(err, result) {
            if (err) throw err;
            if (result.length > 0) {
                return res.status(401).json({msg: "account already exists"})
            }
            let register2 = `INSERT INTO user (email, password, name, first_name) VALUES ("${email}", "${password}", "${name}", "${firstname}")`
            db.query(register2, function(err, result) {
                if (err) throw err;
                const AccessToken = generateToken(result)
                res.json({token: `${AccessToken}`})
            });
        });
    })

    app.post('/login', (req, res) => {
        let email = req.body.email;
        let password = req.body.password;

        if (email === undefined || password === undefined)
            return res.json({msg: "Bad parameter"})
        password = bcrypt.hashSync(password, 10);
        let login1 = `SELECT email FROM user WHERE email = "${email}" AND password = "${password}"`
        let user = `SELECT * FROM user WHERE email = "${email}" AND password = "${password}"`
        db.query(login1, function(err, result) {
            if (err) throw err;
            if (result.length > 0) {
                db.query(user, function(err, result) {
                    if (err) throw err;
                    const AccessToken = generateToken(result)
                    res.json({token: `${AccessToken}`})
                })
            } else
                return res.status(401).json({msg: "Invalid Credentials"});
        });

    })
}
