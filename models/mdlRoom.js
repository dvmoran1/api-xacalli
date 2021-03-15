module.exports = (sequelize, DataTypes) => {
	const Room = sequelize.define('Room',{
	id_hbn:{
		type       : DataTypes.STRING,
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
