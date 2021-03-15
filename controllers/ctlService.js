const db = require('../config/dbConexion.js');
const service = db.Service;
const Op = db.Sequelize.Op;

//################  NUEVA service #################
//Servicio para crear un nuevo registro en la base.
//POST: http://localhost:3000/service/
exports.nuevoService = (req, res,next) => {
	const Serv = service.build(req.body);
	Serv.save().then(dato => {
		return res.status(201).json(dato)
	}).then(next).catch(error => {
		return res.json("El service ya existe")
	});
};

//################  OBTIENE service ###############
//Consulta de todos los registros.
// GET : http://localhost:3000/service/
exports.obtenerServices = (req, res) => {
	service.findAll().then(dato => {
		res.json(dato);
	}).catch(error => {
		return res.sendStatus(401)
	})
};

//################  OBTIENE service ###############
//Consulta por id.
// GET : http://localhost:3000/service/e001
exports.obtenerService = (req, res) => {	
	const id = req.params.id_epo;
	service.findByPk(id).then(service => {
		if(service===null){
			return res.json("El id de service no existe");
		}
		res.json(service);
	}).catch(error => {
		return res.sendStatus(401)
	})
};

//##################################################
//################  ACTUALIZA service #############
// PUT : http://localhost:3000/service/e001
exports.actualizarService = (req, res, next) => {
	const id = req.params.id_epo;
	service.update({ id_svo      : req.body.id_svo, 
					  nombre : req.body.nombre, 
					  costo      : req.body.costo, 
					  duracion : req.body.duracion,  
					  age        : req.body.age }, {
			where: { id_svo: id }
	}).then(num => {
		if (num == 1) {
			res.send({
				message: "service actualizado satisfactoriamente."
			});
		} else {
			res.send({
				message: `No se puede actualizar el service con Id=${id}.`
			});
		}
	}).catch(err => {
		res.status(500).send({
			message: "Error al tratar de actualizar con id=" + id
		});
	});
};

//################  ELIMINA service ###############
//Servicio para eliminar un registro.
// DELETE : http://localhost:3000/service/e0117
exports.eliminarService= (req, res) => {
	const id = req.params.id_epo;
	if(id === null){
		return res.json("Mando un campo nulo");
	}
	service.findByPk(id).then(service => {
		service.destroy({
			where: { id_svo: id }
		}).then(() => {
			res.status(200).json('Se elimino satisfactoriamente el service con Id ' + id);
		});
	}).catch(error => {
		return res.json("El service no existe")
	})
};

//######### BUSCAR CON LIMIT ###############
// GET : http://localhost:3000/service/limit/1
exports.obtenerServicesLimit = (req, res) => {
	const param = req.params.val;
	const valorparam = parseInt(param,10);
	if(valorparam === 0){
		return res.json("El valor ingresado no es valido");
	}else{
		service.findAll({limit: valorparam}).then(service => {
			res.json(service);
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

	service.findAll({ where:{
			[Op.or]: [
				{ id_svo:   { [Op.like]: `%${palabra}%` } },
				{ nombre:   { [Op.like]: `%${palabra}%` } },
				{ costo:    { [Op.like]: `%${palabra}%` } },
				{ duracion: { [Op.like]: `%${palabra}%` } }
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

	service.findAll({ attributes: [...val] })
	.then(data => {
		res.json(data);
	})
	.catch(err => {
		res.json("No hay datos para mostrar.")
	});
}