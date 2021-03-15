const db = require('../config/dbConexion.js');
const roomDet = db.RoomDetail;
const Op = db.Sequelize.Op;

//################  NUEVA roomDet #################
//Servicio para crear un nuevo registro en la base.
//POST: http://localhost:3000/roomDetail/
exports.nuevoRoomDetail = (req, res,next) => {
	const roomDe = roomDet.build(req.body);
	roomDe.save().then(dato => {
		return res.status(201).json(dato)
	}).then(next).catch(error => {
		return res.json("La habitacion ya existe")
	});
};

//################  OBTIENE roomDet ###############
//Consulta de todos los registros.
// GET : http://localhost:3000/roomDetail/
exports.obtenerRoomDetails = (req, res) => {
	roomDet.findAll().then(dato => {
		res.json(dato);
	}).catch(error => {
		return res.sendStatus(401)
	})
};

//################  OBTIENE roomDet ###############
//Consulta por id.
// GET : http://localhost:3000/roomDetail/e001
exports.obtenerRoomDetail = (req, res) => {	
	const id = req.params.id_epo;
	roomDet.findByPk(id).then(roomDet => {
		if(roomDet===null){
			return res.json("El id de la habitacion no existe");
		}
		res.json(roomDet);
	}).catch(error => {
		return res.sendStatus(401)
	})
};

//##################################################
//################  ACTUALIZA roomDet #############
// PUT : http://localhost:3000/roomDetail/e001
exports.actualizarRoomDetail = (req, res, next) => {
	const id = req.params.id_epo;
	roomDet.update({  fecha_de_reservacion  : req.body.fecha_de_reservacion, 
					  fecha_de_inicio       : req.body.fecha_de_inicio, 
					  fecha_de_fin          : req.body.fecha_de_fin, 
					  no_noches             : req.body.no_noches,
					  check_in              : req.body.check_in, 
					  chek_out              : req.body.chek_out, 
					  pago_anticipo         : req.body.pago_anticipo, 
					  precio_habitacion     : req.body.precio_habitacion,
					  cte_id_cte            : req.body.cte_id_cte, 
					  hbn_id_hbn            : req.body.hbn_id_hbn}, {
			where: { id_cte_hbn: id }
	}).then(num => {
		if (num == 1) {
			res.send({
				message: "roomDet actualizado satisfactoriamente."
			});
		} else {
			res.send({
				message: `No se puede actualizar el roomDet con Id=${id}.`
			});
		}
	}).catch(err => {
		res.status(500).send({
			message: "Error al tratar de actualizar con id=" + id
		});
	});
};

//################  ELIMINA roomDet ###############
//Servicio para eliminar un registro.
// DELETE : http://localhost:3000/roomDetail/e0117
exports.eliminarRoomDetail= (req, res) => {
	const id = req.params.id_epo;
	if(id === null){
		return res.json("Mando un campo nulo");
	}
	roomDet.findByPk(id).then(roomDet => {
		roomDet.destroy({
			where: { id_cte_hbn: id }
		}).then(() => {
			res.status(200).json('Se elimino satisfactoriamente el roomDet con Id ' + id);
		});
	}).catch(error => {
		return res.json("La habitacion no existe")
	})
};

//######### BUSCAR CON LIMIT ###############
// GET : http://localhost:3000/roomDetail/limit/1
exports.obtenerRoomDetailsLimit = (req, res) => {
	const param = req.params.val;
	const valorparam = parseInt(param,10);
	if(valorparam === 0){
		return res.json("El valor ingresado no es valido");
	}else{
		roomDet.findAll({limit: valorparam}).then(roomDet => {
			res.json(roomDet);
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

	roomDet.findAll({ where:{
			[Op.or]: [
				{ fecha_de_reservacion: { [Op.like]: `%${palabra}%` } },
				{ fecha_de_inicio:      { [Op.like]: `%${palabra}%` } },
				{ fecha_de_fin:         { [Op.like]: `%${palabra}%` } },
				{ no_noches:            { [Op.like]: `%${palabra}%` } },
				{ check_in:             { [Op.like]: `%${palabra}%` } },
				{ chek_out:             { [Op.like]: `%${palabra}%` } },
				{ pago_anticipo:        { [Op.like]: `%${palabra}%` } },
				{ precio_habitacion:    { [Op.like]: `%${palabra}%` } },
				{ cte_id_cte:           { [Op.like]: `%${palabra}%` } },
				{ hbn_id_hbn:           { [Op.like]: `%${palabra}%` } }
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

	roomDet.findAll({ attributes: [...val] })
	.then(data => {
		res.json(data);
	})
	.catch(err => {
		res.json("No hay datos para mostrar.")
	});
}