const Opinion = require('../models/mdlClsOpinion');

	function addOpinion   (req, res){
		var opinion = new Opinion(req.body);
		res.status(201).send(opinion);
	}

	function showOpinions (req, res){
		var opinion1 = new Opinion(1,"Puede ser mejor");
		//var Opinion2 = new Opinion(2,'Erica','vega','jajjajaj@vega.com');
		res.send(opinion1);
	}
	function showOpinion  (req, res){
		var ShowIdOpinion= idOpinion;
	}
	function updateOpinion(req, res){
		var Opinion1      = new Opinion(1,"Puede ser mejor");
		var modificacion = new Opinion(2,"Me gusto todo");
		Opinion1 = {...Opinion1,...Opinion2}
		res.send(Opinion1);
				
	}
	function removeOpinion(req, res){
		res.status(200).send(`Usuario ${req.params.id} eliminado`);
	}

	module.exports = {
		addOpinion,
		showOpinion,
		showOpinions,
		updateOpinion,
		removeOpinion
	}