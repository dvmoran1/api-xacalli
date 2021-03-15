const db = require('../config/dbConexion.js');
const serviceDet = db.ServiceDetail;
const Op = db.Sequelize.Op;

//################  NUEVO SERVICIO #################
//Servicio para crear un nuevo registro en la base.

exports.nuevoServiceDetail = (req, res,next) => {
	const Ser = serviceDet.build(req.body);
	Ser.save().then(dato => {
		return res.status(201).json(dato)
	}).then(next).catch(error => {
		return res.json("El servicio ya existe")
	});
};

//################  OBTIENE SERVICIO ###############
//Consulta de todos los registros.
exports.obtenerServiceDetails = (req, res) => {
	serviceDet.findAll().then(dato => {
		res.json(dato);
	}).catch(error => {
		return res.sendStatus(401)
	})
};

//################  OBTIENE serviceDet ###############
//Consulta por id.
exports.obtenerServiceDetail = (req, res) => {	
	const id = req.params.id_epo;
	serviceDet.findByPk(id).then(serviceDet => {
		if(serviceDet===null){
			return res.json("El id del servicio no existe");
		}
		res.json(serviceDet);
	}).catch(error => {
		return res.sendStatus(401)
	})
};

//##################################################
//################  ACTUALIZA SERVICIODET #############
exports.actualizarServiceDetail = (req, res, next) => {
	const id = req.params.id_epo;
	serviceDet.update({ cte_id_cte      : req.body.cte_id_cte, 
					    svo_id_svo      : req.body.svo_id_svo, 
					    fecha_de_inicio : req.body.fecha_de_inicio, 
					    fecha_de_fin    : req.body.fecha_de_fin,
					    hora_de_inicio  : req.body.hora_de_inicio, 
					    hora_de_fin     : req.body.hora_de_fin}, {
			where: { id_cte_svo: id }
	}).then(num => {
		if (num == 1) {
			res.send({
				message: "serviceDet actualizado satisfactoriamente."
			});
		} else {
			res.send({
				message: `No se puede actualizar el serviceDet con Id=${id}.`
			});
		}
	}).catch(err => {
		res.status(500).send({
			message: "Error al tratar de actualizar con id=" + id
		});
	});
};

//################  ELIMINA serviceDet ###############
//Servicio para eliminar un registro.

exports.eliminarServiceDetail= (req, res) => {
	const id = req.params.id_epo;
	if(id === null){
		return res.json("Mando un campo nulo");
	}
	serviceDet.findByPk(id).then(serviceDet => {
		serviceDet.destroy({
			where: { id_cte_svo: id }
		}).then(() => {
			res.status(200).json('Se elimino satisfactoriamente el serviceDet con Id ' + id);
		});
	}).catch(error => {
		return res.json("El servicio no existe")
	})
};

//######### BUSCAR CON LIMIT ###############
// GET : http://localhost:3000/serviceDet/limit/1
exports.obtenerServiceDetailsLimit = (req, res) => {
	const param = req.params.val;
	const valorparam = parseInt(param,10);
	if(valorparam === 0){
		return res.json("El valor ingresado no es valido");
	}else{
		serviceDet.findAll({limit: valorparam}).then(serviceDet => {
			res.json(serviceDet);
		}).catch(error => {
			return res.sendStatus(401)
		})
	}
};

// Consulta por coincidencia de atributos, es decir, si los registros tienen un campo
// nombre, el servicio debe ser capaz de regresar todos los registros que compartan el
// nombre. Y esto debe funcionar en general para todos los campos de la base.
//--------------Falta hacer para los demas cmapos---------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
exports.buscarCoincidencia = (req, res) => {
	const palabra = req.params.palabra;

	serviceDet.findAll({ where:{
			[Op.or]: [
				{ fecha_de_inicio:   { [Op.like]: `%${palabra}%` } },
				{ fecha_de_fin:      { [Op.like]: `%${palabra}%` } },
				{ hora_de_inicio:    { [Op.like]: `%${palabra}%` } },
				{ hora_de_fin:       { [Op.like]: `%${palabra}%` } }
		]}
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

	serviceDet.findAll({ attributes: [...val] })
	.then(data => {
		res.json(data);
	})
	.catch(err => {
		res.json("No hay datos para mostrar.")
	});
}