module.exports = (sequelize, DataTypes) => {
	
	const serviceDet = sequelize.define('serviceDet',{
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
