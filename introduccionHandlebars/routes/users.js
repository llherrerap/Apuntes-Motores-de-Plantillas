var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const usuarios = [
    { nombre: 'Juanito', edad: 21},
    { nombre: 'Pepita', edad: 15},
    { nombre: 'Fulanito', edad: 37},
    { nombre: 'Maria', edad: 57},
    { nombre: 'Juanito', edad: 21},
    { nombre: 'Pepita', edad: 15}
  ]
  res.render('usuarios', { usuarios } )
});

router.get('/subruta-users', (req, res) => {
  res.render('index')
})

module.exports = router;
