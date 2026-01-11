const express = require('express');
const router = express.Router();
const task_controller = require("../controllers/taskcontroller.js");
const { checkAuth } = require('../helpers/auth.js'); // Importando o protetor

router.get('/add', checkAuth, task_controller.createtask); 


router.post('/add', checkAuth, task_controller.createtasksave);


router.get('/', checkAuth, task_controller.showTasks);

router.get('/all-data', checkAuth, task_controller.showAllData);


router.post('/remove', checkAuth, task_controller.excluirtarefa);


router.get('/edit/:id', checkAuth, task_controller.atualizartarefa);
router.post('/update', checkAuth, task_controller.atualizartarefaupdate);


router.post('/concluir', checkAuth, task_controller.tarefaconcluida);
router.get('/concluidas-dados', checkAuth, task_controller.tarefaconlcuidaalldata);
router.get('/concluidas-page', checkAuth, task_controller.mostrarPaginaConcluidas);

module.exports = router;