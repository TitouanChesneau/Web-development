const express = require('express');
var bcrypt = require('bcryptjs');
require('dotenv').config();
const app = express();
const port = process.env.MYSQL_PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
require('./routes/user/user')(app, bcrypt);
require('./routes/todos/todos')(app, bcrypt);
require('./routes/auth/auth')(app, bcrypt);

app.listen(port, () => {
  console.log(`Project app waiting on port ${port}`)
});




