const express = require('express');
const app = express();
const conn = require("./db/conn.js");
const Task = require('./models/task.js');
const tasksRoutes = require('./routes/taskrouter.js'); 

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.use('/tasks', tasksRoutes);

app.get('/', (req, res) => {
    res.redirect('/tasks/add')
});


if (process.env.NODE_ENV !== 'production') {
    conn.sync().then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor rodando localmente na porta ${PORT}`);
        });
    }).catch((err) => console.log(err));
} else {

    conn.sync().catch((err) => console.log("Erro na sincronização:", err));
}


module.exports = app;