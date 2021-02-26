var router = require('express').Router();

router.get('/', (req,res)=>{
	res.send("Bienvenido a Hotel Xocalli");
})
router.use('/client', require('./client'));

module.exports = router;