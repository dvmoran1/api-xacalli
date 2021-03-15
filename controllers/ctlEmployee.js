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
			return res.json("El empleado no existe")
		})
	};
};


// Servicio de consulta de todos los registros, limitado a un número determinado por
// el cliente.

exports.obtenerEmpleadosLimit = (req, res) => {
	const val = req.params.val;
	const a = parseInt(val,10);

	if(a === 0){
		return res.json("El valor ingresado no es valido");
	}else{
		employee.findAll({limit: a}).then(employee => {
			res.json(employee);
		}).catch(error => {
			return res.sendStatus(401)
		});
		
	}
};

// Consulta por coincidencia de atributos, es decir, si los registros tienen un campo
// nombre, el servicio debe ser capaz de regresar todos los registros que compartan el
// nombre. Y esto debe funcionar en general para todos los campos de la base.
//--------------Falta hacer para los demas cmapos---------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
exports.buscarCoincidencia = (req, res) => {
	const palabra = req.params.palabra;

	employee.findAll({ where:{
			[Op.or]: [
				{ id_epo:   { [Op.like]: `%${palabra}%` } },
				{ nombre:   { [Op.like]: `%${palabra}%` } },
				{ apellido: { [Op.like]: `%${palabra}%` } },
				{ salario:  { [Op.like]: `%${palabra}%` } },
				{ telefono: { [Op.like]: `%${palabra}%` } },
				{ comision: { [Op.like]: `%${palabra}%` } }
			]
		}
	})
	.then(data => {
		if(data !== [])
			res.json(data);
		else
			res.json("No hay datos para mostrar.")
	})
	.catch(err => {
		res.json("No hay datos para mostrar.")
	});
};

// Servicio de consulta por campos, es decir, un servicio que solo regrese los campos
// que se piden por el usuario.

exports.buscarPorAtributo = (req, res) => {
	const val = req.body.valores;
	console.log(val)

	employee.findAll({ attributes: [...val] })
	.then(data => {
		res.json(data);
	})
	.catch(err => {
		res.json("No hay datos para mostrar.")
	});
}

