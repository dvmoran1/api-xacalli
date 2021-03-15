

module.exports = (sequelize, DataTypes) => {
	const  Sequelize  = require('sequelize');

	const Employee = sequelize.define('Employee',{
	id_epo:{
		type: DataTypes.UUID,
  		defaultValue: Sequelize.UUIDV4,
		allowNull: false,
      	unique: true,
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
	Employee.hasOne(Employee,{foreignKey:'id_epo'});
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