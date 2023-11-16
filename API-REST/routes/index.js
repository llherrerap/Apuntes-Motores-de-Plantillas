var express = require('express');
var router = express.Router();
const { conexion } = require('../database/conexion')

/* GET home page. */
router.get('/docentes', function(req, res, next) {
  // Consulta de docentes en la base de datos por medio del comando SELECT
  conexion.query('SELECT * FROM docentes;', (error, resultado) => {
    if (error) {
      res.status(500).send('Ocurrio un error en la consulta')
    } else {
      res.status(200).render('index', { resultado, title: 'Docentes' })
    }
  })
});

router.get('/registro-docente', (req, res) => {
  res.sendFile('registro-docentes.html', {root: 'public'})
})

router.post('/agregar-docente', (req, res) => {
  const nombre = req.body.name
  const apellido = req.body.lastname
  const fecha = req.body.date
  const genero = req.body.genero
  const direccion = req.body.direccion
  conexion.query(`INSERT INTO docentes (nombre, apellido, fecha_nacimiento, genero, direccion) VALUES ('${nombre}', '${apellido}', '${fecha}', '${genero}', '${direccion}')`, (error, resultado) => {
    if(error){
      console.log(`Ocurrio un error en la ejecución ${error}`)
      res.status(500).send('Error en la consulta')
    } else {
      res.status(200).redirect('/docentes')
    }
  })
})

router.get('/estudiantes', function(req, res, next) {
  conexion.query('SELECT * FROM estudiantes;', (error, resultado) => {
    if (error) {
      res.status(500).send('Ocurrio un error en la consulta')
    } else {
      res.status(200).render('index', { resultado, title: 'Estudiantes' })
    }
  })
});

module.exports = router;
