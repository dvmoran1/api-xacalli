const router = require('express').Router();
const {
    addService,
    showService,
    showServices,
    updateService,
    removeService
} = require('../controllers/ctlClsService');

router.post  ('/',    addService);
router.get   ('/:id', showService);
router.get   ('/',    showServices);
router.put   ('/:id', updateService);
router.delete('/:id', removeService);

module.exports = router;
