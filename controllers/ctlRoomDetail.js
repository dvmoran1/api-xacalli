const RoomDetail = require('../models/mdlClsRoomDetail');

	function addRoomDetail   (req, res){
		var roomDetail = new RoomDetail(req.body);
		res.status(201).send(roomDetail);
	}

	function showRoomDetails (req, res){
		var RoomDetail1 = new RoomDetail(1, '30/08/2020', '05/09/2020', 'd','','', '3405','2');
		//var RoomDetail2 = new RoomDetail(2,'Erica','vega','jajjajaj@vega.com');
		res.send(RoomDetail1);
	}
	function showRoomDetail  (req, res){
		var ShowIdRoomDetail= idRoom;
	}
	function updateRoomDetail(req, res){
		var RoomDetail1      = new RoomDetail(1,'30/08/2020', '05/09/2020', 'd','','', '3405','2');
		var modificacion = new RoomDetail(2,'30/08/2020', '05/09/2020', 'd','','', '3403','1');
		RoomDetail1 = {...RoomDetail1,...RoomDetail2}
		res.send(RoomDetail1);
				
	}
	function removeRoomDetail(req, res){
		res.status(200).send(`Usuario ${req.params.id} eliminado`);
	}

	module.exports = {
		addRoomDetail,
		showRoomDetail,
		showRoomDetails,
		updateRoomDetail,
		removeRoomDetail
	}