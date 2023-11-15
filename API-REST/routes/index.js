var express = require('express');
var router = express.Router();
const { conexion } = require('../database/conexion')

/* GET home page. */
router.get('/', function(req, res, next) {
  conexion.query('SELECT * FROM docentes;', (error, resultado) => {
    if (error) {
      res.status(500).send('Ocurrio un error en la consulta')
    } else {
      res.status(200).render('index', { resultado, title: 'Docentes' })
    }
  })
});

module.exports = router;
