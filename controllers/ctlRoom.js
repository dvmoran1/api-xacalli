const db = require('../config/dbConexion.js');
const room = db.Room;
const Op = db.Sequelize.Op;

//################  NUEVA room #################
//Servicio para crear un nuevo registro en la base.
//POST: http://localhost:3000/room/
exports.nuevoRoom = (req, res,next) => {
	const Room = room.build(req.body);
	Room.save().then(dato => {
		return res.status(201).json(dato)
	}).then(next).catch(error => {
		return res.json("La habitacion ya existe")
	});
};

//################  OBTIENE room ###############
//Consulta de todos los registros.
// GET : http://localhost:3000/room/
exports.obtenerRooms = (req, res) => {
	room.findAll().then(dato => {
		res.json(dato);
	}).catch(error => {
		return res.sendStatus(401)
	})
};

//################  OBTIENE room ###############
//Consulta por id.
// GET : http://localhost:3000/room/e001
exports.obtenerRoom = (req, res) => {	
	const id = req.params.id_epo;
	room.findByPk(id).then(room => {
		if(room===null){
			return res.json("El id de la habitacion no existe");
		}
		res.json(room);
	}).catch(error => {
		return res.sendStatus(401)
	})
};

//##################################################
//################  ACTUALIZA room #############
// PUT : http://localhost:3000/room/e001
exports.actualizarRoom = (req, res, next) => {
	const id = req.params.id_epo;
	room.update({     id_hbn      : req.body.id_hbn, 
					  costo : req.body.costo, 
					  cupo      : req.body.cupo, 
					  disponibilidad : req.body.disponibilidad,  
					  age        : req.body.age }, {
			where: { id_hbn: id }
	}).then(num => {
		if (num == 1) {
			res.send({
				message: "room actualizado satisfactoriamente."
			});
		} else {
			res.send({
				message: `No se puede actualizar el room con Id=${id}.`
			});
		}
	}).catch(err => {
		res.status(500).send({
			message: "Error al tratar de actualizar con id=" + id
		});
	});
};

//################  ELIMINA ROOM ###############
//Servicio para eliminar un registro.
// DELETE : http://localhost:3000/room/e0117
exports.eliminarRoom= (req, res) => {
	const id = req.params.id_epo;
	if(id === null){
		return res.json("Mando un campo nulo");
	}
	room.findByPk(id).then(room => {
		room.destroy({
			where: { id_hbn: id }
		}).then(() => {
			res.status(200).json('Se elimino satisfactoriamente el room con Id ' + id);
		});
	}).catch(error => {
		return res.json("La habitacion no existe")
	})
};

//######### BUSCAR CON LIMIT ###############
// GET : http://localhost:3000/room/limit/1
exports.obtenerRoomsLimit = (req, res) => {
	const param = req.params.val;
	const valorparam = parseInt(param,10);
	if(valorparam === 0){
		return res.json("El valor ingresado no es valido");
	}else{
		room.findAll({limit: valorparam}).then(room => {
			res.json(room);
		}).catch(error => {
			return res.sendStatus(401)
		})
	}
};
