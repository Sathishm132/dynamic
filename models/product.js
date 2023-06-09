const Sequelize=require("sequelize")
const db=require('../util/database')

const product=db.define('poducts',{
    id: {
    type: Sequelize.INTEGER,
    unique: true ,
    autoIncrement:true,
    primaryKey: true
  },
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    price:{
        type:Sequelize.DOUBLE,
        allowNull:false,
    },
    descrption:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    imaageUrl:{
        type:Sequelize.STRING,
        allowNull:false
    }

})
module.exports=product;



