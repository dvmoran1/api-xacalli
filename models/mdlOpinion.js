module.exports = (sequelize, DataTypes) => {
	const Opinion = sequelize.define('Opinion',{
	id_OPN:{
		type       : DataTypes.STRING,
		primaryKey : true
	},
	cte_id_cte:{
		type       : DataTypes.STRING,
		allowNull  : false
	},
	texto:{
	    type       : DataTypes.STRING,
		allowNull  : false
	},
	valoracion:{  
		type       :  DataTypes.INTEGER,
		allowNull  : false
	}
},{tableName : 'opinion',timestamps: false});
	return Opinion;
}
