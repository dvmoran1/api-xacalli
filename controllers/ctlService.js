const Service = require('../models/mdlClsService');

	function addService   (req, res){
		var service = new Service(req.body);
		res.status(201).send(service);
	}

	function showServices (req, res){
		var Service1 = new Service(1,'Asador', '300','3 hours');
		//var Service2 = new Service(2,'Erica','vega','jajjajaj@vega.com');
		res.send(Service1);
	}
	function showService  (req, res){
		var ShowIService= idService;
	}
	function updateService(req, res){
		var Service1      = new Service(1,'Asador', '300','3 hours');
		var modificacion = new Service(2,'Asador', '300','5 hours');
		Service1 = {...Service1,...Service2}
		res.send(Service1);
				
	}
	function removeService(req, res){
		res.status(200).send(`Usuario ${req.params.id} eliminado`);
	}

	module.exports = {
		addService,
		showService,
		showServices,
		updateService,
		removeService
	}