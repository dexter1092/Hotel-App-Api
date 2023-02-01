var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var fileUpload = require('express-fileupload');

const sql = require('./config/dbconn.js');
require('dotenv').config();


// Routes
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users/userRouter');
var authenticationRouter = require('./routes/authentications/authenticationRouter');

var hotelRouter = require('./routes/hotels/hotelRouter');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Include File Upload Package into express
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
  parseNested: true,
  createParentPath: true

}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors({
    origin: '*'
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/authentication', authenticationRouter);

app.use('/api/v1/hotel', hotelRouter);

app.use('/api/v1/users', userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
