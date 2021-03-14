	const db = require('../config/dbConexion.js');
	const employee = db.Employee;
	const Op = db.Sequelize.Op;

	//##################################################
	//################  NUEVO EMPLEADO #################
	//Servicio para crear un nuevo registro en la base.
	exports.nuevoEmpleado = (req, res,next) => {
		const Emp = employee.build(req.body)
			// Guarda esta instancia, es hasta este momento que se modifica la base de datos.
			Emp.save().then(emp => {
				return res.status(201).json(emp)
			}).then(next)
			.catch(error => {
				return res.json("El usuario ya existe")
			});

		};

	//##################################################
	//################  OBTIENE EMPLEADOS ###############
	//Consulta de todos los registros.
	exports.obtenerEmpleados = (req, res) => {
		employee.findAll().then(employee => {
			res.json(employee);
		}).catch(error => {
			return res.sendStatus(401)
		})
	};

	//##################################################
	//################  OBTIENE EMPLEADO ###############
	//Consulta por id.
	exports.obtenerEmpleado = (req, res) => {	
		const id = req.params.id_epo;
		employee.findByPk(id).then(employee => {
			if(employee===null)
			{
				return res.json("El id de usuario no existe");
			}
			res.json(employee);
		}).catch(error => {
			return res.sendStatus(401)
		})
	};

	//##################################################
	//################  ACTUALIZA EMPLEADO #############
	// Servicio para modificar un registro, se debe de considerar los casos de modifica-
	// ciones por atributo, es decir, si los registros tienen un atributo nombre el servi-
	// cio debe ser capaz de solo modificar el nombre. Así como una modificación total, es
	// decir, de todos los atributos. Se recomienda definir servicios por separado para
	// cada caso.
	exports.actualizarEmpleado = (req, res, next) => {
		const id = req.params.id_epo;

		employee.update({ id_epo: req.body.id_epo, nombre: req.body.nombre, apellido: req.body.apellido, salario: req.body.salario, telefono: req.body.telefono, 
			comision: req.body.comision, edo_id_edo: req.body.edo_id_edo, age: req.body.age }, {
				where: { id_epo: id }
			})
		.then(num => {
			if (num == 1) {
				res.send({
					message: "Empleado actualizado satisfactoriamente."
				});
			} else {
				res.send({
					message: `No se puede actualizar el empleado con Id=${id}.`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: "Error al tratar de actualizar con id=" + id
			});
		});
	};

	//##################################################
	//################  ELIMINA EMPLEADO ###############
	//Servicio para eliminar un registro.
	exports.eliminarEmpleado = (req, res) => {
		const id = req.params.id_epo;
		if(id === null){
			return res.json("Mando un campo nulo")
		}
		employee.findByPk(id).then(employee => {
			employee.destroy({
				where: { id_epo: id }
			}).then(() => {
				res.status(200).json('Se elimino satisfactoriamente el empleado con Id ' + id);
			});
		}).catch(error => {
			return res.json("El Usuario no existe")
		})
	};


	// Consulta por coincidencia de atributos, es decir, si los registros tienen un campo
	// nombre, el servicio debe ser capaz de regresar todos los registros que compartan el
	// nombre. Y esto debe funcionar en general para todos los campos de la base.
	//--------------Falta hacer para los demas cmapos---------------------------------------------------------------------------------
	//-------------------------------------------------------------------------------------------------------------------------------
	exports.buscarCoincidencia = (req, res) => {
		const nombre = req.params.nombre;
		var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

		employee.findAll({ where: condition })
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			res.json("No hay datos para mostrar.")
		});
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
			})
			
		}
	};




	// Servicio de consulta por campos, es decir, un servicio que solo regrese los campos
	// que se piden por el usuario.

		exports.buscarPorAtributo = (req, res) => {
		const nombre = req.body.va1;
		console.log(nombre)

		employee.findAll({ attributes: ['id_epo','nombre','apellido','salario'] })
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			res.json("No hay datos para mostrar.")
		});
	};


/*Model.findAll({
  attributes: [
    'foo',
    [sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats'],
    'bar'
  ]
});*/