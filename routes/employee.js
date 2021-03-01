const router = require('express').Router();
const {
	addEmployee,
	showEmployee,
	showEmployees,
	updateEmployee,
	removeEmployee
} = require('../controllers/ctlClsEmployee');


router.post  ('/',    addEmployee);
router.get   ('/:id', showEmployee);
router.get   ('/',    showEmployees);
router.put   ('/:id', updateEmployee);
router.delete('/:id', removeEmployee);

module.exports = router;