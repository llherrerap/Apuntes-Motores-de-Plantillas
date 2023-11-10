var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Enrutamiento para usuarios');
});

router.get('/subruta-users', (req, res) => {
  res.render('index')
})

module.exports = router;
