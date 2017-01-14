const express = require('express')
const handlebars = require('express-handlebars');
let app = express();
const products = require('./routes/products');
const articles = require('./routes/articles');
const bodyParser = require('body-parser');
const displayProduct = require('./db/products');

/*console.log(products)
*/
const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/products', products);
/*app.use('/routes/articles.js', articles);*/

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

module.exports = app;