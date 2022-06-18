
const express = require('express');
const cors = require('cors');
const { register, login } = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');
const productController = require('./controllers/product.controller');
const cartController = require('./controllers/cart.controller');
const authenticateToken = require('./middlewares/authenticate');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/users',userController);
app.use('/products',productController);
app.use('/cart',authenticateToken,cartController);
app.post('/register',register);
app.post('/login',login);


app.get('/',(req,res) => {
    res.send('bath and body works backend api');
})
app.get('/users',(req,res) => {
    res.json(users);
})
module.exports = app;