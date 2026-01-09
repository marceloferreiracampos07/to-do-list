const express = require('express')
const router = express.Router()
const task_controller = require("../controllers/taskcontroller.js") 

router.get('/add', task_controller.createtask) 


router.post('/add', task_controller.createtasksave)

router.get('/', task_controller.showTasks)

router.get('/all-data', task_controller.showAllData);

router.post('/remove',task_controller.excluirtarefa)

router.get('/edit/:id',task_controller.atualizartarefa)

router.post('/update', task_controller.atualizartarefaupdate);

router.post('/concluir',task_controller.tarefaconcluida)

router.get('/concluidas-dados',task_controller.tarefaconlcuidaalldata)

router.get('/concluidas-page',task_controller.mostrarPaginaConcluidas)
module.exports = router