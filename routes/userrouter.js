const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller.js');
const { checkAuth } = require('..helpers/auth.js'); 

router.get('/login', checkAuth ,UserController.showlogin);
router.post('/login', checkAuth,UserController.verificarlogin);

router.get('/cadastro',checkAuth, UserController.showcadastro);
router.post('/cadastro', checkAuth,UserController.salvarlogin);

router.get('/logout', checkAuth,UserController.sair);

module.exports = router;