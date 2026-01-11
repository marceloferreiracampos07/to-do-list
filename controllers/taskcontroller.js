const Task = require("../models/task.js")
const path = require("path")
const user = require("../models/user.js")

module.exports = class taskcontroller {
    
    static createtask(req, res) {
        res.sendFile(path.join(__dirname, '../views/addtarefa.html'))
    }

    static async createtasksave(req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false,
            Userid:req.session.userid
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
            const userId = req.session.userid
            const task = await Task.findAll({where:{UserId:userId},raw:true,include:user})
            res.json(task)
        } catch (err) {
            console.log(err)
        }
    }

    static async excluirtarefa(req, res) {
        const id = req.body.id
        const userid = req.session.userid
        try {
            await Task.destroy({ where: { id: id,UserId:userid } })
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
        const userid = req.session.userid
        const taskdata = {
            title: req.body.title,
            description: req.body.description
        }
        try {
            await Task.update(taskdata, { where: { id: id, UserId:userid } })
            res.redirect('/tasks')
        } catch (error) {
            res.status(500).send("Erro ao atualizar")
        }
    }
   static async tarefaconcluida(req, res) {
    const id = req.body.id;
    const userid = req.session.userid
    const taskdata = { done: true };

    try {
        await Task.update(taskdata, { where: { id: id,UserId:userid } });
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