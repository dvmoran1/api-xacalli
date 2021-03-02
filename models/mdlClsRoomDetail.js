class mdlClsRoomDetail{
	constructor(reservationDate, startDate, endingDate, advance, checkIn, checkOu, idCliet, idRoom){
		this.reservationDate = reservationDate;
		this.startDate       = startDate;
		this.endingDate      = endingDate;
		this.advance         = advance;
		this.checkIn         = checkIn;
		this.checkOu         = checkOu;
		this.idCliet         = idCliet;
		this.idRoom          = idRoom;
	}
}
module.exports = mdlClsRoomDetail;