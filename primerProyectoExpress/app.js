//Importación de modulos
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Importación de los enrutamientos
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const ejemploRouter = require('./routes/ejemplo')
const perfilRouter = require('./routes/perfil')

//Decirle a la app que va a utilizar express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Utilizando middlewares que sirven como intermediarios entre la solicitud y 
//la respuesta HTTP
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Usar las rutas importadas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ejemplo', ejemploRouter)
//Ejercicio
//Realizar un enrutamiento que sea /perfil en donde muestren su informacion
//Por ejemplo: Nombre, edad, carrera, gustos...
app.use('/perfil', perfilRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
