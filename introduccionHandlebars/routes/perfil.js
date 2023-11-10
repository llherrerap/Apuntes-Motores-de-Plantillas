const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    const infoEstudiante = {
        nombre: 'Javier',
        apellido: 'Pinzón',
        codigoEstudiantil: '987654321JP',
        edad: 41,
        curso: 'Desarrollo web backend basico',
        correo: 'jpinzon@udistrital.edu.co',
        institucion: 'Universidad Distrital'
    }
    res.render('estudiante', infoEstudiante)
})

module.exports= router