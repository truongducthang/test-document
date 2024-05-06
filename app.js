const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Router
const userRoutes = require('./src/user/user.router');

const globalErrHandler = require('./src/error/error');
const AppError = require('./utils/appError');
const path = require('path');

const app = express();
//setup
//morgan
app.use(logger('dev'));
//cookieParser
app.use(cookieParser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Limit request from the same API
// const limiter = rateLimit({
//   max: 150,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too Many Request from this IP, please try again in an hour',
// });
// app.use('/api/v1', limiter);

// Body parser, reading data from body into req.body
// app.use(
//   express.json({
//     limit: '15kb',
//   })
// );

// Data sanitization against Nosql query injection
app.use(mongoSanitize());

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

// set static file
app.use(express.static('public'));

// Routes
app.get('/', function (req, res) {
  var duongDanFile = path.join(__dirname, 'home.html');
  res.sendFile(duongDanFile);
});
app.use('/api/v1/users', userRoutes);

//end Routers

// handle undefined Routes
app.use('*', (req, res, next) => {
  const err = new AppError(404, 'fail', 'undefined route');
  next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;
