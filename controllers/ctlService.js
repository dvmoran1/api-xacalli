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
	service.update({ id_OPN      : req.body.id_OPN, 
					  cte_id_cte : req.body.cte_id_cte, 
					  texto      : req.body.texto, 
					  valoracion : req.body.valoracion,  
					  age        : req.body.age }, {
			where: { id_OPN: id }
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
			where: { id_OPN: id }
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
