const path = require('path');
  


const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize=require("./util/database")
const prduct=require('./models/product')
const user=require('./models/user')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const cart = require('./models/cart');
const cartitem = require('./models/cartitem');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
 
app.use((req,res,next)=>{
     user.findAll({
        where: {
          id: 1
        }
      }).then((user)=>{
        
        req.user=user
        next()
      })
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
 prduct.belongsTo(user,{constrains:true,onDelete:'CASCADE'})
 user.hasMany(prduct)
 user.hasOne(cart)
 cart.belongsTo(user)
 cart.belongsToMany(prduct,{through:cartitem})
 prduct.belongsToMany(cart,{through:cartitem})


sequelize.sync({force:true}).then((result)=>{
   return user.findAll({
    where: {
      id: 1
    }
  });
}).then((user)=>{
    if(!user){
        return user.create({name:"sathish",email:"satash@g.com"})
    }
    return user
}).then((user)=>{
    user.createCart()
}
    
)

app.listen(3000);
