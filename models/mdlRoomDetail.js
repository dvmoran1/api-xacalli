module.exports = (sequelize, DataTypes) => {
	const  Sequelize  = require('sequelize');
	
	const cliHabitacion = sequelize.define('cliHabitacion',{
	id_cte_hbn:{
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
		allowNull: false,
		unique: true,
		primaryKey : true
	},
	fecha_de_reservacion:{
		type       : DataTypes.DATE,
		primaryKey : true
	},
	fecha_de_inicio:{
		type       : DataTypes.DATE,
		allowNull  : false
	},
	fecha_de_fin:{
	    type       : DataTypes.DATE,
		allowNull  : false
	},
	no_noches      :DataTypes.INTEGER,
	check_in:{
		type       : DataTypes.STRING,
		primaryKey : true
	},
	chek_out:{
		type       : DataTypes.STRING,
		allowNull  : false
	},
	pago_anticipo:{
	    type       : DataTypes.INTEGER,
		allowNull  : false
	},
	precio_habitacion:{  
		type       :  DataTypes.INTEGER,
		allowNull  : false
	},
	cte_id_cte:{
	    type       : DataTypes.STRING,
		allowNull  : false
	},
	hbn_id_hbn:{  
		type       :  DataTypes.INTEGER,
		allowNull  : false
	}
},{tableName : 'cliente_habitacion',timestamps: false});
	return cliHabitacion;
}
