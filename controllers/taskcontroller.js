const Task = require("../models/task.js")
const path = require("path")

module.exports = class taskcontroller {
    
    static createtask(req, res) {
        res.sendFile(path.join(__dirname, '../views/addtarefa.html'))
    }

    static async createtasksave(req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }
        try {
            await Task.create(task)
            res.redirect('/tasks')
        } catch (err) {
            console.log(err)
        }
    }

    static async showTasks(req, res) {
        res.sendFile(path.join(__dirname, '../views/tarefas.html'))
    }

    static async showAllData(req, res) {
        try {
            const tasks = await Task.findAll({ raw: true })
            res.json(tasks)
        } catch (err) {
            console.log(err)
        }
    }

    static async excluirtarefa(req, res) {
        const id = req.body.id
        try {
            await Task.destroy({ where: { id: id } })
            res.redirect('/tasks')
        } catch (err) {
            console.log(err)
        }
    }


    static async atualizartarefa(req, res) {
        const id = req.params.id
        try {
            const task = await Task.findOne({ where: { id: id }, raw: true })
            if (!task) {
                return res.redirect('/tasks')
            }
            return res.sendFile(path.join(__dirname, '../views/editartarefa.html'))
        } catch (error) {
            return res.status(500).send("Erro interno")
        }
    }

    static async atualizartarefaupdate(req, res) {
        const id = req.body.id
        const taskdata = {
            title: req.body.title,
            description: req.body.description
        }
        try {
            await Task.update(taskdata, { where: { id: id } })
            res.redirect('/tasks')
        } catch (error) {
            res.status(500).send("Erro ao atualizar")
        }
    }
   static async tarefaconcluida(req, res) {
    const id = req.body.id;
    const taskdata = { done: true };

    try {
        await Task.update(taskdata, { where: { id: id } });
        res.redirect('/tasks/concluidas-page'); 
    } catch (error) {
        console.log("Erro ao atualizar status:", error);
        res.status(500).send("Erro ao concluir tarefa");
    }
}
static async tarefaconlcuidaalldata(req, res) {
    try {
        //
        const tarefas = await Task.findAll({ where: { done: true }, raw: true });
      return res.json(tarefas || []);

    } catch (error) {
        console.log("Erro ao buscar tarefas:", error);
        res.status(500).json({ error: "Erro interno" });
    }
}
static async mostrarPaginaConcluidas(req, res) {
    res.sendFile(path.join(__dirname, '../views/tarefasconcluidas.html'));
}
}