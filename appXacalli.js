//Importamos las bibliotecas 
var express    = require('express'),
    bodyParser = require('body-parser'),
    cors       = require('cors'),
    html       = require('express-handlebars'),//----------video
    path       = require('path'),
    Sequelize  = require('sequelize');//------------------------video

//Iniciamos un objeto global
var app = express();


// Configuramos el Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

// app.use('/',require('./routes'));

const db = require('./config/dbConexion.js');

// app.use('/', require('./routes'));
require('./routes/employee')(app);
require('./routes/client')(app);
require('./routes/opinion')(app);

require('./routes/room')(app);
require('./routes/roomDetail')(app);
require('./routes/service')(app);
require('./routes/serviceDetail')(app);

//cachamos los errores a 404
app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

//Inicializamos el servidor 
var server = app.listen(process.env.PORT || 3000, function(){
	console.log('Escuchando en el puerto ' + server.address().port);
});

