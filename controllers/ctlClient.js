const db = require('../config/dbConexion.js');
const client = db.Client;
const Op = db.Sequelize.Op;


//################  NUEVO EMPLEADO #################
//Servicio para crear un nuevo registro en la base.
//POST: http://localhost:3000/client/
exports.nuevoCliente = (req, res,next) => {
	const Cli = client.build(req.body);
	Cli.save().then(cli => {
		return res.status(201).json(cli)
	}).then(next).catch(error => {
		return res.json("El usuario ya existe")
	});
};

//################  OBTIENE EMPLEADOS ###############
//Consulta de todos los registros.
// GET : http://localhost:3000/client/
exports.obtenerClientes = (req, res) => {
	client.findAll().then(clien => {
		res.json(clien);
	}).catch(error => {
		return res.sendStatus(401)
	})
};

//################  OBTIENE EMPLEADO ###############
//Consulta por id.
// GET : http://localhost:3000/client/e001
exports.obtenerCliente = (req, res) => {	
	const id = req.params.id_epo;
	client.findByPk(id).then(client => {
		if(client===null){
			return res.json("El id de usuario no existe");
		}
		res.json(client);
	}).catch(error => {
		return res.sendStatus(401)
	})
};

//##################################################
//################  ACTUALIZA EMPLEADO #############
// PUT : http://localhost:3000/client/e001
exports.actualizarCliente = (req, res, next) => {
	const id = req.params.id_epo;
	client.update({ id_cte    : req.body.id_cte, 
					  nombre    : req.body.nombre, 
					  apellido  : req.body.apellido, 
					  telefono   : req.body.telefono, 
					  no_personas  : req.body.no_personas, 
					  no_mascotas  : req.body.no_mascotas, 
					  nacionalidad: req.body.nacionalidad,
					  email  : req.body.email, 
					  facebook  : req.body.facebook, 
					  epo_id_epo: req.body.epo_id_epo, 
					  age       : req.body.age }, {
			where: { id_cte: id }
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
// DELETE : http://localhost:3000/client/e0117
exports.eliminarCliente = (req, res) => {
	const id = req.params.id_epo;
	if(id === null){
		return res.json("Mando un campo nulo");
	}
	client.findByPk(id).then(client => {
		client.destroy({
			where: { id_cte: id }
		}).then(() => {
			res.status(200).json('Se elimino satisfactoriamente el empleado con Id ' + id);
		});
	}).catch(error => {
		return res.json("El Usuario no existe")
	})
};

//######### BUSCAR POR COINCIDENCIA ############### OPCION DOS 
//                                       .../campo de tabla/valorabuscar
// GET : http://localhost:3000/client/coin/salario/C
/*exports.buscarCoincidencia = (req, res) => {
	const nombre = req.params.nombre;
	const apellido = req.params.apellido;
	const salario = req.params.salario;
	const telefono = req.params.telefono;
	const comision = req.params.comision;

	var condition  = nombre   ? { nombre:   { [Op.like]: `%${nombre}%`   } } : null;
	var condition1 = apellido ? { apellido: { [Op.like]: `%${apellido}%` } } : null;
	var condition2 = salario  ? { salario:  { [Op.like]: `%${salario}%`  } } : null;
	var condition3 = telefono ? { telefono: { [Op.like]: `%${telefono}%` } } : null;
	var condition4 = comision ? { comision: { [Op.like]: `%${comision}%` } } : null;

	switch(nombre){
		case 'nombre':
			client.findAll({ where: condition })
			.then(data => {
				res.json(data);
			}).catch(err => {
				res.json("No hay datos para mostrar.")
			});
			break;
		case 'apellido':
			client.findAll({ where: condition1 })
			.then(data => {
				res.json(data);
			}).catch(err => {
				res.json("No hay datos para mostrar.")
			});
			break;
		case 'salario':
			client.findAll({ where: condition2 })
			.then(data => {
				res.json(data);
			}).catch(err => {
				res.json("No hay datos para mostrar.")
			});
			break;
		case 'telefono':
			client.findAll({ where: condition3 })
			.then(data => {
				res.json(data);
			}).catch(err => {
				res.json("No hay datos para mostrar.")
			});
			break;
		case 'comision':
			client.findAll({ where: condition4 })
			.then(data => {
				res.json(data);
			}).catch(err => {
				res.json("No hay datos para mostrar.")
			});
		break;
	}
};
*/
//######### BUSCAR CON LIMIT ###############
// GET : http://localhost:3000/client/limit/1
exports.obtenerClientesLimit = (req, res) => {
	const param = req.params.val;
	const valorparam = parseInt(param,10);
	if(valorparam === 0){
		return res.json("El valor ingresado no es valido");
	}else{
		client.findAll({limit: valorparam}).then(client => {
			res.json(client);
		}).catch(error => {
			return res.sendStatus(401)
		})
	}
};
