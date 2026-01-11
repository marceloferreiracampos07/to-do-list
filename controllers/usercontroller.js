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
        console.error('Erro detalhado no Sequelize:', error);
        res.status(500).send("Erro ao criar conta.");
    }
}