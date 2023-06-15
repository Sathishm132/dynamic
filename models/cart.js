const Sequelize=require("sequelize")
const sequelize=require("../util/database")
const cart=sequelize.define("cart",{
  id:{
    type: Sequelize.INTEGER,
    unique: true ,
    autoIncrement:true,
    primaryKey: true
  }
})
module.exports=cart