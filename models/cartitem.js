const Sequelize=require("sequelize")
const sequelize=require("../util/database")
const cartitem=sequelize.define("cartitem",{
  id:{
    type: Sequelize.INTEGER,
    unique: true ,
    autoIncrement:true,
    primaryKey: true
  },
  quantity:Sequelize.INTEGER
})
module.exports=cartitem