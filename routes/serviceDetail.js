const router = require('express').Router();
const {
    addServiceDetail,
    showServiceDetail,
    showServiceDetails,
    updateServiceDetail,
    removeServiceDetail
} = require('../controllers/ctlClsServiceDetail');

router.post  ('/',    addServiceDetail);
router.get   ('/:id', showServiceDetail);
router.get   ('/',    showServiceDetails);
router.put   ('/:id', updateServiceDetail);
router.delete('/:id', removeServiceDetail);

module.exports = router;
