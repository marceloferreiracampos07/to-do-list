const express = require('express');
const app = express();
const session = require('express-session');
const conn = require('./db/conn.js');


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
    secret: process.env.SESSION_SECRET || 'jrlindo', 
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, 
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
    if (req.session.userid) {
        return res.redirect('/tasks/add'); 
    }
    res.redirect('/login');
});


user.hasMany(task);
task.belongsTo(user);


conn.sync({ alter: true }).then(() => {
    if (process.env.NODE_ENV !== 'production') {
        app.listen(PORT, () => {
            console.log(`Servidor rodando localmente na porta ${PORT}`);
        });
    }
}).catch((err) => console.log("Erro na sincronização:", err));

module.exports = app;