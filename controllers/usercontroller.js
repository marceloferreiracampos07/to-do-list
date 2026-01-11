const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const path = require('path');

class UserController {
    
    static showlogin(req, res) {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    }

    static showcadastro(req, res) {
        res.sendFile(path.join(__dirname, '../views/cadastro.html'));
    }

    static async salvarlogin(req, res) {
    const { name, email, password, telefone } = req.body;

    try {
        const usuarioExistente = await User.findOne({ where: { email: email } });
        if (usuarioExistente) {
            return res.status(400).send("Este e-mail já está cadastrado.");
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const userData = {
            name,
            email,
            password: hash,
            telefone
        };

        await User.create(userData);
        
        
        
        res.redirect('/login');

    } catch (error) {
        console.error('Erro no cadastro:', error);
        res.status(500).send("Erro ao criar conta.");
    }
}
    static async verificarlogin(req, res) {
        const { email, password } = req.body;

        try {
            const usuarioencontrado = await User.findOne({ where: { email: email } });

            if (!usuarioencontrado) {
                return res.status(400).send('Usuário não encontrado.');
            }

            const senhaBate = bcrypt.compareSync(password, usuarioencontrado.password);

            if (!senhaBate) {
                return res.status(400).send('Senha incorreta.');
            }

            req.session.userid = usuarioencontrado.id;

            req.session.save(() => {
                res.redirect('/tasks/add'); 
            });

        } catch (error) {
            console.error('Erro no login:', error);
            res.status(500).send('Erro interno no servidor.');
        }
    }

    static sair(req, res) {
        req.session.destroy(() => {
            res.redirect('/login');
        });
    }
}

module.exports = UserController;