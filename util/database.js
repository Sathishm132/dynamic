const mysql=require("mysql2")
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'Sathish1032'
})
module.exports=pool.promise()