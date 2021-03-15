module.exports = (sequelize, DataTypes) => {
	const  Sequelize  = require('sequelize');

	const serviceDet = sequelize.define('serviceDet',{
	id_cte_svo:{
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
		allowNull: false,
		unique: true,
		primaryKey : true
	},
	cte_id_cte:{
		type       : DataTypes.STRING,
		allowNull  : false
	},
	svo_id_svo:{
	    type       : DataTypes.STRING,
		allowNull  : false
	},
	fecha_de_inicio:{
		type       : DataTypes.DATE,
		allowNull  : false
	},
	fecha_de_fin:{
	    type       : DataTypes.DATE,
		allowNull  : false
	},
	hora_de_inicio:{
	    type       : DataTypes.STRING,
		allowNull  : false
	},
	hora_de_fin:{
	    type       : DataTypes.STRING,
		allowNull  : false
	}
},{tableName : 'cliente_servicio',timestamps: false});
	return serviceDet;
}
