const { request, response } = require('express');

let students = [];

const addStudent = ( req = request, res = response ) => {

  // Se obtiene la data del body
  const { code, name, level, program } = req.body;

  let validate = false;

  // Validar si el estudiante ya existe
  students.filter( st => {
    if ( parseInt(code) === st.code ) {
      validate = true;
    }
  });

  if ( validate ) {
      // Respuesta
    return res.status(400).json({
      ok: false,
      msg: `Estudiante con el codigo ${ code } ya existe`
    });
  } else {
    // Se agrega el nuevo estudiante
    students.push({
      'code': parseInt( code ),
      'name': name,
      'level': parseInt( level ),
      'program': program
    });
  
    // Respuesta
    return res.status(201).json({
      ok: true,
      msg: `Estudiante ${ name } creado`
    });
  }
}


// Obtener estudiantes
const getStudents = ( req = request, res = response ) => {

  // Respuesta
  return res.status(201).json({
    ok: true,
    msg: 'Estudiantes uis',
    students
  });
}


// Exportacion de los controladores
module.exports = {
  addStudent,
  getStudents
}