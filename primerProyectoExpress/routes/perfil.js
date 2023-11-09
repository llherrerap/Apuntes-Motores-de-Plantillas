//Importar
const express = require('express')
const router = express.Router()

//Crear las rutas
router.get('/', (req, res) => {
    res.send('Hola! Mi nombre es Liliana. Me gusta la programación y pintar')
})

//Exportar
module.exports = router