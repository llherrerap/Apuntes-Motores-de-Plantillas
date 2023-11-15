// Importamos el modulo mysql para poder contectarnos a la base de datos
const mysql = require('mysql')

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'colegio'
})

conexion.connect((error) => {
  if (error){
    console.log(`Ha ocurrido un error en la conexion: ${error}`)
    return;
  } else{
    console.log('Conexion exitosa')
  }
})

module.exports = { conexion }