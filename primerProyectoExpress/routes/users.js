var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Repuesta de usuarios');
});

router.get('/pruebaUsuarios', (req, res) =>{
  res.status(200).send('Enrutamiento de prueba en usuarios')
})

module.exports = router;
