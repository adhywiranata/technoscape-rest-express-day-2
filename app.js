const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');

const app = express();

app.use(logger('dev'));
app.use(cors()); // keamanan siapa aja sih "ORIGIN" yang boleh dikasih
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Router: REST API path2 apa aja sih yang bisa diakses di api tersebut
app.use('/', indexRouter);
app.use('/products', productsRouter);

module.exports = app;
