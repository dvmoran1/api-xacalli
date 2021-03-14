const db = require('../config/dbConexion.js');
const employee = db.Employee;


exports.nuevoEmpleado = (req, res) => {	
	// Guarda
	employee.create({  
	  id_epo: req.body.id_epo,
	  nombre: req.body.nombre,
	  apellido: req.body.apellido,
	  salario: req.body.salario,
	  telefono: req.body.telefono,
	  comision: req.body.comision,
	  edo_id_edo: req.body.edo_id_edo,
	  age: req.body.age
	}).then(employee => {		
		// devuelve
		res.send(employee);
	});
};
 
exports.obtenerEmpleados = (req, res) => {
	employee.findAll().then(employee => {
	  res.json(employee);
	});
};

///no funciona
exports.obtenerEmpleado = (req, res) => {	
	employee.findById(req.params.id_epo).then(employee => {
		res.send(employee);
	})
};
 
//tampcoco
exports.actualizarEmpleado = (req, res) => {
	const id = req.params.id_epo;
	employee.update( { id_epo: req.body.id_epo, nombre: req.body.nombre, apellido: req.body.apellido, salario: req.body.salario, telefono: req.body.telefono, 
		comision: req.body.comision, edo_id_edo: req.body.edo_id_edo, age: req.body.age }, 
					 { where: {id: req.params.id_epo} }
				   ).then(() => {
					 res.status(200).send("En empleado con Id " + id +" se actualiza corectamente");
				   });
};
 
exports.eliminarEmpleado = (req, res) => {
	const id = req.params.id_epo;
	employee.destroy({
	  where: { id_epo: id }
	}).then(() => {
	  res.status(200).send('Se elimino satisfactoriamente el empleado con Id ' + id);
	});
};


















/*const Employee = require('../models/mdlEmployee');

//const passport = require('passport');

function crearEmpleado(req,res,next){
	const emp = Employee.build(req.body);
	emp.save().then(user => {
		return res.status(201).json(user.toAuthJSON());
	}).catch(next);


}

function obtenerEmpleados(req,res){

	Employee.findAll().then(Employee => {
		return res.json(Employee);
	}).catch(error => {
		return res.sendStatus(401);
	})


}

module.exports = {
	crearEmpleado,
	obtenerEmpleados
}

*/