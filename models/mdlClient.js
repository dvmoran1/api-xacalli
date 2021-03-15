module.exports = (sequelize, DataTypes) => {
	const  Sequelize  = require('sequelize');
	
	const Client = sequelize.define('Client',{
	id_cte:{
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
	telefono:{
		type       :DataTypes.STRING,
		allowNull  : false
	},
	no_personas:{
		type       : DataTypes.INTEGER,
		primaryKey : true
	},
	no_mascotas:{
		type       : DataTypes.INTEGER,
		allowNull  : false
	},
	nacionalidad:{
	    type       : DataTypes.STRING,
		allowNull  : false
	},
	email          :  DataTypes.STRING,
	facebook       :DataTypes.STRING,
	epo_id_epo:{  
		type       :  DataTypes.STRING,
		allowNull  :false
	}
},{tableName : 'cliente',timestamps: false});
	Client.hasOne(Client,{foreignKey:'epo_id_epo'});
	return Client;
}
