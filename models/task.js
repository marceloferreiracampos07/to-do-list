const {DataTypes} = require("sequelize")
const db = require('../db/conn')

const Task = db.define('Task',{
    title:{
        type:DataTypes.STRING(225),
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING(225)
    },
    done:{
        type:DataTypes.BOOLEAN

    }
})
module.exports = Task