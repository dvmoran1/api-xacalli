const router = require('express').Router();
const {
    addRoomDetail,
    showRoomDetail,
    showRoomDetails,
    updateRoomDetail,
    removeRoomDetail
} = require('../controllers/ctlClsRoomDetail');

router.post  ('/',    addRoomDetail);
router.get   ('/:id', showRoomDetail);
router.get   ('/',    showRoomDetails);
router.put   ('/:id', updateRoomDetail);
router.delete('/:id', removeRoomDetail);

module.exports = router;
