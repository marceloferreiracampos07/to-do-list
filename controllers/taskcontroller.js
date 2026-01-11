const Task = require("../models/task.js")
const path = require("path")
const User = require("../models/user.js")

module.exports = class taskcontroller {
    
    static createtask(req, res) {
        res.sendFile(path.join(__dirname, '../views/addtarefa.html'))
    }

    static async createtasksave(req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false,
            UserId: req.session.userid 
        }
        try {
            await Task.create(task)
            res.redirect('/tasks')
        } catch (err) {
            console.log(err)
            res.status(500).send("Erro ao salvar tarefa")
        }
    }

    static async showTasks(req, res) {
        res.sendFile(path.join(__dirname, '../views/tarefas.html'))
    }

    static async showAllData(req, res) {
        try {
            const userId = req.session.userid
            const tasks = await Task.findAll({ 
                where: { UserId: userId, done: false }, 
                raw: true 
            })
            res.json(tasks)
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "Erro ao buscar dados" })
        }
    }

    static async excluirtarefa(req, res) {
        const id = req.body.id
        const userid = req.session.userid
        try {
            await Task.destroy({ where: { id: id, UserId: userid } })
            res.redirect('/tasks')
        } catch (err) {
            console.log(err)
        }
    }

    static async atualizartarefa(req, res) {
        const id = req.params.id
        const userid = req.session.userid
        try {
            const task = await Task.findOne({ where: { id: id, UserId: userid }, raw: true })
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
            await Task.update(taskdata, { where: { id: id, UserId: userid } })
            res.redirect('/tasks')
        } catch (error) {
            res.status(500).send("Erro ao atualizar")
        }
    }

    static async tarefaconcluida(req, res) {
        const id = req.body.id;
        const userid = req.session.userid
        try {
            await Task.update({ done: true }, { where: { id: id, UserId: userid } });
            res.redirect('/tasks/concluidas-page'); 
        } catch (error) {
            res.status(500).send("Erro ao concluir tarefa");
        }
    }

    static async tarefaconlcuidaalldata(req, res) {
        try {
            const userId = req.session.userid
            const tarefas = await Task.findAll({ 
                where: { UserId: userId, done: true }, 
                raw: true 
            });
            return res.json(tarefas || []);
        } catch (error) {
            res.status(500).json({ error: "Erro interno" });
        }
    }

    static async mostrarPaginaConcluidas(req, res) {
        res.sendFile(path.join(__dirname, '../views/tarefasconcluidas.html'));