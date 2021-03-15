const db = require('../config/dbConexion.js');
const opinion = db.Opinion;
const Op = db.Sequelize.Op;

//################  NUEVA OPINION #################
//Servicio para crear un nuevo registro en la base.
//POST: http://localhost:3000/opinion/
exports.nuevoOpinion = (req, res,next) => {
	const Opi = opinion.build(req.body);
	Opi.save().then(dato => {
		return res.status(201).json(dato)
	}).then(next).catch(error => {
		return res.json("El opinion ya existe")
	});
};

//################  OBTIENE OPINION ###############
//Consulta de todos los registros.
// GET : http://localhost:3000/opinion/
exports.obtenerOpinions = (req, res) => {
	opinion.findAll().then(dato => {
		res.json(dato);
	}).catch(error => {
		return res.sendStatus(401)
	})
};

//################  OBTIENE OPINION ###############
//Consulta por id.
// GET : http://localhost:3000/opinion/e001
exports.obtenerOpinion = (req, res) => {	
	const id = req.params.id_epo;
	opinion.findByPk(id).then(opinion => {
		if(opinion===null){
			return res.json("El id de opinion no existe");
		}
		res.json(opinion);
	}).catch(error => {
		return res.sendStatus(401)
	})
};

//##################################################
//################  ACTUALIZA OPINION #############
// PUT : http://localhost:3000/opinion/e001
exports.actualizarOpinion = (req, res, next) => {
	const id = req.params.id_epo;
	opinion.update({ id_OPN      : req.body.id_OPN, 
					  cte_id_cte : req.body.cte_id_cte, 
					  texto      : req.body.texto, 
					  valoracion : req.body.valoracion,  
					  age        : req.body.age }, {
			where: { id_OPN: id }
	}).then(num => {
		if (num == 1) {
			res.send({
				message: "Opinion actualizado satisfactoriamente."
			});
		} else {
			res.send({
				message: `No se puede actualizar el opinion con Id=${id}.`
			});
		}
	}).catch(err => {
		res.status(500).send({
			message: "Error al tratar de actualizar con id=" + id
		});
	});
};

//################  ELIMINA OPINION ###############
//Servicio para eliminar un registro.
// DELETE : http://localhost:3000/opinion/e0117
exports.eliminarOpinion= (req, res) => {
	const id = req.params.id_epo;
	if(id === null){
		return res.json("Mando un campo nulo");
	}
	opinion.findByPk(id).then(opinion => {
		opinion.destroy({
			where: { id_OPN: id }
		}).then(() => {
			res.status(200).json('Se elimino satisfactoriamente el opinion con Id ' + id);
		});
	}).catch(error => {
		return res.json("El opinion no existe")
	})
};

//######### BUSCAR CON LIMIT ###############
// GET : http://localhost:3000/opinion/limit/1
exports.obtenerOpinionsLimit = (req, res) => {
	const param = req.params.val;
	const valorparam = parseInt(param,10);
	if(valorparam === 0){
		return res.json("El valor ingresado no es valido");
	}else{
		opinion.findAll({limit: valorparam}).then(opinion => {
			res.json(opinion);
		}).catch(error => {
			return res.sendStatus(401)
		})
	}
};
