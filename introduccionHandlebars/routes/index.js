var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //El metodo render renderiza la plantilla
  //En este caso la plantilla es index.hbs
  //A la plantilla index se le manda una información que este caso es curso
  // res.render('index', { curso: 'Curso Backend' });

  const curso = {
    nombre: 'Desarrollo Web Backend Básico',
    profesor: 'Liliana Herrera',
    correo: 'lherrera@udistrital.edu.co',
    horario: 'L-V 7:00PM a 9:30PM',
    institucion: 'Universidad Distrital Francisco José de Caldas',
    fecha_finalizacion: '2023-12-08 00:00:00.000'
  }
  res.render('index', curso)
});

module.exports = router;
