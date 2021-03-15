var router = require('express').Router();

router.get('/', (req,res)=>{
	res.send("<center><h1>Bienvenido al Api Xacalli</center><h1><br>");
})

module.exports = router;

