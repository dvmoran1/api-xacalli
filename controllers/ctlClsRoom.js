const Room = require('../models/mdlClsRoom');

	function addRoom   (req, res){
		var room = new Room(req.body);
		res.status(201).send(room);
	}

	function showRooms (req, res){
		var Room1 = new Room(1,'500','1','YES');
		//var Room2 = new Room(2,'Erica','vega','jajjajaj@vega.com');
		res.send(Room1);
	}
	function showRoom  (req, res){
		var ShowIdRoom= idRoom;
	}
	function updateRoom(req, res){
		var Room1      = new Room(1,'500','1','YES');
		var modificacion = new Room(2,'500','1','NO');
		Room1 = {...Room1,...Room2}
		res.send(Room1);
				
	}
	function removeRoom(req, res){
		res.status(200).send(`Usuario ${req.params.id} eliminado`);
	}

	module.exports = {
		addRoom,
		showRoom,
		showRooms,
		updateRoom,
		removeRoom
	}