const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 23758, 
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false 
            }
        }
    }
);


const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectamos ao seu MySQL com sucesso!');
    } catch (error) {
        console.error('Erro de conexão:', error);
    }
};

connectDB();

module.exports = sequelize;