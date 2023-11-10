const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const infoDocente = {
        nombre: 'Liliana',
        apellido: 'Herrera',
        cedula: '123456789',
        edad: 32,
        materia: 'Curso Desarrollo web Backend Básico',
        profesion: 'Ingeniera de sistemas'
    }
    res.render('docente', infoDocente)
})

module.exports = router;