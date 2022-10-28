const { Router } = require('express');

const { addStudent, getStudents } = require('../controllers/students');


const router = Router();


// Crear nuevo estudiante
router.post( '/addStudents', addStudent );

// Mostrar estudiantes
router.get( '/getStudents', getStudents );


// Exportacion de las rutas
module.exports = router;