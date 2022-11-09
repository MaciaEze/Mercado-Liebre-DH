const express=require('express');
const mainRouter = express.Router();
const mainController = require('../controllers/mainController')

//rutas

mainRouter.get('/', mainController.index);

mainRouter.get('/home', mainController.index);

mainRouter.get('/register', mainController.register);

mainRouter.get('/login', mainController.login);


module.exports=mainRouter