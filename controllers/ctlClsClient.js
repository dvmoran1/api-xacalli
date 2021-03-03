const Client = require('../models/mdlClsClient');

	function addClient   (req, res){
		var client = new Client(req.body);
		res.status(201).send(client);
	}

	function showClients (req, res){
		var client1 = new Client(1,'Juan','vega','jajjajaj@vega.com');
		//var client2 = new Client(2,'Erica','vega','jajjajaj@vega.com');
		res.send(client1);
	}

	function showClient  (req, res){
		var ShowIdClient= idClient;
	}
	
	function updateClient(req, res){
		var client1      = new Client(1,'Juan','vega','jajjajaj@vega.com');
		var modificacion = new Client(2,'Erica','vega','jajjajaj@vega.com');
		client1 = {...client1,...client2}
		res.send(client1);
				
	}
	function removeClient(req, res){
		res.status(200).send(`Usuario ${req.params.id} eliminado`);
	}

	module.exports = {
		addClient,
		showClient,
		showClients,
		updateClient,
		removeClient
	}