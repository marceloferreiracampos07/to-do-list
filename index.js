const express = require('express')
const app = express()
const conn = require("./db/conn.js")
const Task = require('./models/task.js')
const tasksRoutes = require('./routes/taskrouter.js') 
require('dotenv').config();
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.static('public'))
app.use(express.json())
app.use('/tasks', tasksRoutes)


conn.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log("Servidor rodando ")
        })
    })
    .catch((err) => console.log(err))
