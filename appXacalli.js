//Importamos las bibliotecas 
var express    = require('express'),
    bodyParser = require('body-parser'),
    cors       = require('cors');

//Iniciamos un objeto global
var app = express();

// Configuramos el Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

//lo agregamos despues de configurar el index
app.use('/',require('./routes'));


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