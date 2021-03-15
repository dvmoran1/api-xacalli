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
// COnfiguracion de conexion 
/*const sequelize = new Sequelize('b70bircd0jwbmntvrazp','uw2ojwdixu6vapak','fH9OeWEfHN5WFyArwNg5',{host:'b70bircd0jwbmntvrazp-mysql.services.clever-cloud.com',dialect:'mysql'})
//verificamos conexion
sequelize.authenticate().then(() => {
	console.log('Conectado');
})
.catch(err => {
	console.log('No se establecio la conexion');
})
*/
const db = require('./config/dbConexion.js');
require('./routes/employee')(app);
require('./routes/client')(app);



//--------------------------video
app.set('view',path.join(__dirname,'view'));
app.set('public',path.join(__dirname,'public'));
app.engine('.html', html({
	defaultLayout:'home',
	layoutsDir: path.join(app.get('public'),'Img'),
	layoutsDir: path.join(app.get('public'),'css'),
	extname:'.html'
}));
app.set('view engine','.html');
//public 
app.use(express.static(path.join(__dirname, 'public')));
//--------------------------



//lo agregamos despues de configurar el index
//app.use('/',require('./routes'));//lo podemos eliminar--------
//require('./config/passport');
//require('./models/mdlEmployee');
//require('./models/mdlClient');



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

