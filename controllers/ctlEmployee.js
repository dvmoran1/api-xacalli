const db = require('../config/dbConexion.js');
const employee = db.Employee;
const Op = db.Sequelize.Op;

//################  NUEVO EMPLEADO #################
//Servicio para crear un nuevo registro en la base.
//POST: http://localhost:3000/employee/
exports.nuevoEmpleado = (req, res,next) => {
	const Emp = employee.build(req.body);
	Emp.save().then(emp => {
		return res.status(201).json(emp)
	}).then(next).catch(error => {
		return res.json("El empleado ya existe")
	});
};

//################  OBTIENE EMPLEADOS ###############
//Consulta de todos los registros.
// GET : http://localhost:3000/employee/
exports.obtenerEmpleados = (req, res) => {
	employee.findAll().then(employee => {
		res.json(employee);
	}).catch(error => {
		return res.sendStatus(401)
	})
};

//################  OBTIENE EMPLEADO ###############
//Consulta por id.
// GET : http://localhost:3000/employee/e001
exports.obtenerEmpleado = (req, res) => {	
	const id = req.params.id_epo;
	employee.findByPk(id).then(employee => {
		if(employee===null){
			return res.json("El id de empleado no existe");
		}
		res.json(employee);
	}).catch(error => {
		return res.sendStatus(401)
	})
};

//##################################################
//################  ACTUALIZA EMPLEADO #############
// PUT : http://localhost:3000/employee/e001
exports.actualizarEmpleado = (req, res, next) => {
	const id = req.params.id_epo;
	employee.update({ id_epo    : req.body.id_epo, 
					  nombre    : req.body.nombre, 
					  apellido  : req.body.apellido, 
					  salario   : req.body.salario, 
					  telefono  : req.body.telefono, 
					  comision  : req.body.comision, 
					  edo_id_edo: req.body.edo_id_edo, 
					  age       : req.body.age }, {
			where: { id_epo: id }
	}).then(num => {
		if (num == 1) {
			res.send({
				message: "Empleado actualizado satisfactoriamente."
			});
		} else {
			res.send({
				message: `No se puede actualizar el empleado con Id=${id}.`
			});
		}
	}).catch(err => {
		res.status(500).send({
			message: "Error al tratar de actualizar con id=" + id
		});
	});
};

//################  ELIMINA EMPLEADO ###############
//Servicio para eliminar un registro.
// DELETE : http://localhost:3000/employee/e0117
exports.eliminarEmpleado = (req, res) => {
	const id = req.params.id_epo;
	if(id === null){
		return res.json("Mando un campo nulo");
	}
	employee.findByPk(id).then(employee => {
		employee.destroy({
			where: { id_epo: id }
		}).then(() => {
			res.status(200).json('Se elimino satisfactoriamente el empleado con Id ' + id);
		});
	}).catch(error => {
		return res.json("El empleado no existe")
	})
};

//######### BUSCAR CON LIMIT ###############
// GET : http://localhost:3000/employee/limit/1
exports.obtenerEmpleadosLimit = (req, res) => {
	const param = req.params.val;
	const valorparam = parseInt(param,10);
	if(valorparam === 0){
		return res.json("El valor ingresado no es valido");
	}else{
		employee.findAll({limit: valorparam}).then(employee => {
			res.json(employee);
		}).catch(error => {
			return res.sendStatus(401)
		})
	}
};
