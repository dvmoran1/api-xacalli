const Employee = require('../models/mdlClsEmployee');

	function addEmployee   (req, res){
		var employee = new Employee(req.body);
		res.status(201).send(employee);
	}

	function showEmployees (req, res){
		var employee1 = new Employee(1,'Juan','vega', '200', '271546456', 'jajjajaj@vega.com', '1234' , '34508');
		//var Employee2 = new Employee(2,'Erica','vega','jajjajaj@vega.com');
		res.send(employee1);
	}
	function showEmployee  (req, res){
		var ShowIdEmployee= idEmployee;
	}
	function updateEmployee(req, res){
		var employee1      = new Employee(1,'Juan','vega', '200', '271546456', 'jajjajaj@vega.com', '1234' , '34508');
		var modificacion = new Employee(2,'Juan','vega', '200', '271546456', 'jajjajaj@vega.com', '12345' , '345031');
		employee1 = {...employee1,...employee2}
		res.send(employee1);
				
	}
	function removeEmployee(req, res){
		res.status(200).send(`Usuario ${req.params.id} eliminado`);
	}

	module.exports = {
		addEmployee,
		showEmployee,
		showEmployees,
		updateEmployee,
		removeEmployee
	}