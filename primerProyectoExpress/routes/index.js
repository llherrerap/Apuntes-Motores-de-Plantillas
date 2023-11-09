var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Curso Desarrollo Web Backend Intermedio :)' });
});

router.get('/ejemploIndex', (req, res) =>{
  res.send('Enrutamiento de prueba en mi proyecto')
})

module.exports = router;
