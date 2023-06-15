const Sequelize =require('sequelize');
const sequelize=new Sequelize('appoinment-app','root','Sathish1032',
{host:'localhost',dialect:'mysql'});

module.exports =sequelize;
