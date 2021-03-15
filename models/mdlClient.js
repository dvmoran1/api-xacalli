/*class mdlClsClient{
	constructor(idClient, name, lastname, telephoneNumber, mascot, nationality, email, facebook, idEmployee){
		this.idClient         = idClient;
		this.name            = name;
		this.lastname        = lastname;
		this.telephoneNumber = telephoneNumber;
		this.mascot          = mascot;
		this.nationality     = nationality;
		this.email           = email;
		this.facebook        = facebook;
		this.idEmployee      = idEmployee;
	}
}
module.exports = mdlClsClient;*/


module.exports = (sequelize, DataTypes) => {
	const Client = sequelize.define('Client',{
	id_cte:{
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

/*
CREATE TABLE cliente (
    id_cte        	VARCHAR (10) NOT NULL,
    nombre        	VARCHAR (20) NOT NULL,
    apellido      	VARCHAR (20) NOT NULL,
    telefono      	VARCHAR (15) NOT NULL,
    no_personas		INT NOT NULL,
    no_mascotas   	INT NOT NULL,
    nacionalidad  	VARCHAR (20) NOT NULL,
    email         	VARCHAR (30),
    facebook      	VARCHAR (30),
    epo_id_epo    	VARCHAR (10) NOT NULL
);

*/