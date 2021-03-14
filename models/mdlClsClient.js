class mdlClsClient{
	constructor(idClient, name, lastname, telephoneNumber, mascot, nationality, email, facebook, idEmployee){
		this.idClient         = idClient;
		this.name            = name;
		this.lastname        = lastname;
		this.telephoneNumber = telephoneNumber;
		this.mascot          = mascot;
		this.nationality     = nationality;
		this.email           = email;
		this.facebook        = facebook;
		this.idEmployee      = idEmployee;
	}
}
module.exports = mdlClsClient;