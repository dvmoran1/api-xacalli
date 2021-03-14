
module.exports = (sequelize, DataTypes) => {
	const Employee = sequelize.define('Employee',{
	id_epo:{
		type       : DataTypes.STRING,
		primaryKey : true
	},
	nombre:{
		type       : DataTypes.STRING,
		allowNull  : false
	},
	apellido:{
	    type       : DataTypes.STRING,
		allowNull  : false
	},
	salario:{  
		type       :  DataTypes.INTEGER,
		allowNull  : false
	},
	telefono:{
		type       :DataTypes.STRING,
		allowNull  : false
	},
	comision       :DataTypes.INTEGER,
	edo_id_edo     :DataTypes.INTEGER
},{tableName : 'empleado',timestamps: false});
	return Employee;
}


/*
const {Sequelize,DataTypes} = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');


const Employee = sequelize.define('Employee',{
	id_epo:{
		type       : DataTypes.STRING,
		primaryKey : true
	},
	nombre:{
		type       : DataTypes.STRING,
		allowNull  : false
	},
	apellido:{
	    type       : DataTypes.STRING,
		allowNull  : false
	},
	salario:{  
		type       :  DataTypes.INTEGER,
		allowNull  : false
	},
	telefono:{
		type       :DataTypes.STRING,
		allowNull  : false
	},
	comision       :DataTypes.INTEGER,
	edo_id_edo     :DataTypes.INTEGER
},{tableName : 'empleado'});
Employee.hasOne(Employee,{foreignKey:'id_epo'});
console.log(Employee === sequelize.models.Employee);
module.exports = Employee;*/