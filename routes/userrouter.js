const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller.js');
const { checkAuth } = require('./helpers/auth'); // Sem letras maiúsculas se a pasta for 'helpers'

router.get('/login', check ,UserController.showlogin);
router.post('/login', check,UserController.verificarlogin);

router.get('/cadastro',check, UserController.showcadastro);
router.post('/cadastro', check,UserController.salvarlogin);

router.get('/logout', check,UserController.sair);

module.exports = router;