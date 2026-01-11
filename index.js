const express = require('express');
const app = express();
const session = require('express-session'); 
const conn = require("./db/conn.js");

const task = require('./models/task.js');
const user = require('./models/user.js');

const tasksRoutes = require('./routes/taskrouter.js'); 
const userRoutes = require('./routes/userrouter.js'); 


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const PORT = process.env.PORT || 3000;


app.use(session({
    name: 'session',
    secret: process.env.SESSION_SECRET || 'Jrlindo', // Usa a variável da Vercel
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Deixe false para funcionar em HTTP e HTTPS sem problemas de proxy
        maxAge: 3600000, 
        httpOnly: true
    }
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {

    res.locals.session = req.session.userid ? req.session : null;
    next();
});


app.use('/tasks', tasksRoutes); 
app.use('/', userRoutes); 


app.get('/', (req, res) => {
    res.redirect('/tasks'); 
});


user.hasMany(task);
task.belongsTo(user);


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