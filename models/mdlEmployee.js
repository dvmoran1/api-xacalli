
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
	Employee.hasOne(Employee,{foreignKey:'id_epo'});
	return Employee;
}
