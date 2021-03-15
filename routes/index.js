var router = require('express').Router();

router.get('/', (req,res)=>{
	//res.send("<center><h1>Bienvenido al Api Xacalli</center><h1><br>");
	res.send('API-XACALLI');
	//res.sendFile('/var/www/html/api-xacalli/view/home.js');
})
// router.use('/client', require('./client'));
// router.use('/employee', require('./employee'));


module.exports = router;

