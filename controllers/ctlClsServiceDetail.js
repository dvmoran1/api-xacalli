const ServiceDetail = require('../models/mdlClsServiceDetail');

	function addServiceDetail   (req, res){
		var serviceDetail = new ServiceDetail(req.body);
		res.status(201).send(serviceDetail);
	}

	function showServiceDetails (req, res){
		var ServiceDetail1 = new ServiceDetail(1, '30/08/2020', '05/09/2020', 'd','17:00','18:00');
		res.send(ServiceDetail1);
	}
	function showServiceDetail  (req, res){
		var ShowIdServiceDetail= idService;
	}
	function updateServiceDetail(req, res){
		var ServiceDetail1      = new ServiceDetail(1, '30/08/2020', '05/09/2020', 'd','17:00','18:00');
		var modificacion = new ServiceDetail(2, '30/08/2020', '05/09/2020', 'd','15:00','18:00');
		ServiceDetail1 = {...ServiceDetail1,...ServiceDetail2}
		res.send(ServiceDetail1);
				
	}
	function removeServiceDetail(req, res){
		res.status(200).send(`Usuario ${req.params.id} eliminado`);
	}

	module.exports = {
		addServiceDetail,
		showServiceDetail,
		showServiceDetails,
		updateServiceDetail,
		removeServiceDetail
	}