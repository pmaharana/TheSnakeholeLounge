const express                 = require('express'),
      path                    = require('path'),
      bodyParser              = require('body-parser'),
      methodOverride          = require('method-override');      

const adminRoutes             = require('./routes/admin'),
      shopRoutes              = require('./routes/shop'),
      cartRoutes              = require('./routes/cart'),
      errorController         = require('./controllers/error'),
      sequelize               = require('./util/database');

const Product                 = require('./models/product'),
      User                    = require('./models/user');

const app                     = express();

// setting global config
app.set('view engine', 'ejs');
// default for views already set to view folder. this is being explicit
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(error => console.log(error));
})

app.use(shopRoutes);
app.use(cartRoutes);
app.use('/admin', adminRoutes);

app.use(errorController.getErrorPage);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product); // this is optional but it's good to define bi-directionally

sequelize
// .sync({force: true})
  .sync()
  .then(result => {
    return User.findByPk(1);
  })
  .then(user => {
    if (!user) return User.create({username: 'admin', email: 'pranyewest@test.com'}); 
    return Promise.resolve(user);
  })
  .then(result => app.listen(3000))
  .catch(error => console.log(error));

// app.listen(3000, () => console.log('Starting...'));