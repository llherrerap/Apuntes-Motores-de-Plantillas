//importar los modulos
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Enrutamiento de ejemplo. Realizado por Liliana')
})

module.exports = router