class mdlClsServiceDetail{
	constructor(idCliet,idService,startDate,endingDate,startTime,endingTime){
		this.idCliet    = idCliet;
		this.idService  = idService; 
		this.startDate  = startDate;
		this.endingDate = endingDate;
		this.startTime  = startTime; 
		this.endingTime = endingTime;
	}
	module.exports = mdlClsServiceDetail;
    /*addServiceDetail   (){}
    showServiceDetails (){}
    showServiceDetail  (){}
    updateServiceDetail(){}
    removeServiceDetail(){}	*/
}