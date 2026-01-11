const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller.js');
const { checkAuth } = require('../helpers/auth.js'); 

router.get('/login', UserController.showlogin);
router.post('/login', UserController.verificarlogin);

router.get('/cadastro', UserController.showcadastro);
router.post('/cadastro', UserController.salvarlogin);


router.get('/logout', checkAuth, UserController.sair);

module.exports = router;