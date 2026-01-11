const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller.js');
const check = require('../helpers/auth.js.')

router.get('/login', check ,UserController.showlogin);
router.post('/login', check,UserController.verificarlogin);

router.get('/cadastro',check, UserController.showcadastro);
router.post('/cadastro', check,UserController.salvarlogin);

router.get('/logout', check,UserController.sair);

module.exports = router;