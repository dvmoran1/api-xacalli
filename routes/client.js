const router = require('express').Router();
const {
	addClient,
	showClient,
	showClients,
	updateClient,
	removeClient
} = require('../controllers/ctlClsClient');


router.post  ('/',    addClient);
//router.get   ('/:id', showClient);
router.get   ('/',    showClients);
router.put   ('/:id', updateClient);
router.delete('/:id', removeClient);

module.exports = router;