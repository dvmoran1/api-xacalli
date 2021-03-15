module.exports = (sequelize, DataTypes) => {
	const  Sequelize  = require('sequelize');
	
	const Room = sequelize.define('Room',{
	id_hbn:{
		type: DataTypes.UUID,
  		defaultValue: Sequelize.UUIDV4,
		allowNull: false,
      	unique: true,
		primaryKey : true
	},
	costo:{
		type       : DataTypes.INTEGER,
		allowNull  : false
	},
	cupo:{
	    type       : DataTypes.INTEGER,
		allowNull  : false
	},
	disponibilidad : DataTypes.INTEGER
},{tableName : 'habitacion',timestamps: false});
	return Room;
}
