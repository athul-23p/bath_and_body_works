
const express = require('express');
const { register, login } = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');

const app = express();
app.use(express.json());
app.use('/users',userController);
app.post('/register',register);
app.post('/login',login);


app.get('/',(req,res) => {
    res.send('bath and body works backend api');
})
app.get('/users',(req,res) => {
    res.json(users);
})
module.exports = app;