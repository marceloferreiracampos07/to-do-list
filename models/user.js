const {DataTypes} = require('sequelize')
const db = require("../db/conn.js")

const user = db.define('Users',{
    name:{
        type: DataTypes.STRING(225),
        allowNull:false,

    },
    email:{
        type:DataTypes.STRING(225),
        allowNull:false,
        unique:true,

    },
    password:{
        type:DataTypes.STRING(225),
        allowNull:false,
    },
    telefone:{
        type:DataTypes.STRING(20),
        allowNull:false

    }
})
module.exports = user