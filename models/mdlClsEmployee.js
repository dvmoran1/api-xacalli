class mdlClsEmployee{
	constructor(idEmployee, name, lastname, commission, telephoneNumber, email, password, edoIdEdo){
		this.idEmployee      =  idEmployee;
		this.name            =  name;
		this.lastname        = lastname;
		this.commission          = commission;
		this.telephoneNumber = telephoneNumber;
		this.email           = email;
		this.password        = password;
		this.edoIdEdo        = edoIdEdo;
	}
	module.exports = mdlClsEmployee;
	/*addEmployee   (){}
	showEmployees (){}
	showEmployee  (){}
	updateEmployee(){}
	removeEmployee(){}
	*/
}