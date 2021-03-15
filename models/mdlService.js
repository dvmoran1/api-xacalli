module.exports = (sequelize, DataTypes) => {
	const  Sequelize  = require('sequelize');
	
	const Service = sequelize.define('Service',{
	id_svo:{
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
