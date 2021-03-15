module.exports = (sequelize, DataTypes) => {
	const Service = sequelize.define('Service',{
	id_svo:{
		type       : DataTypes.STRING,
		primaryKey : true
	},
	nombre:{
		type       : DataTypes.STRING,
		allowNull  : false
	},
	costo:{
	    type       : DataTypes.INTEGER,
		allowNull  : false
	},
	duracion:{
	    type       : DataTypes.STRING,
		allowNull  : false
	}
},{tableName : 'servicios',timestamps: false});
	return Service;
}
