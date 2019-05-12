const express                 = require('express'),
      path                    = require('path'),
      bodyParser              = require('body-parser'),
      methodOverride          = require('method-override');      

const adminRoutes             = require('./routes/admin'),
      shopRoutes              = require('./routes/shop'),
      cartRoutes              = require('./routes/cart'),
      errorController         = require('./controllers/error');


const mongoConnect            = require('./util/database').mongoConnect;

const app                     = express();

// setting global config
app.set('view engine', 'ejs');
// default for views already set to view folder. this is being explicit
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// app.use((req, res, next) => {
//   // User.findByPk(1)
//   //   .then(user => {
//   //     req.user = user;
//   //     next();
//   //   })
//   //   .catch(error => console.log(error));
// })

app.use(shopRoutes);
app.use(cartRoutes);
app.use('/admin', adminRoutes);

app.use(errorController.getErrorPage);

mongoConnect(() => {
  app.listen(3000, () => console.log('Starting...'));
});

// app.listen(3000, () => console.log('Starting...'));