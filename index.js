const express = require('express')
const app = express()
const conn = require("./db/conn.js")
const Task = require('./models/task.js')
const tasksRoutes = require('./routes/taskrouter.js') 

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


const PORT = process.env.PORT || 3000;

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
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        })
    })
    .catch((err) => {
        console.log('Erro ao sincronizar banco:', err)
    })