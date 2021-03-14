const router = require('express').Router();
const {
    addRoom,
    showRoom,
    showRooms,
    updateRoom,
    removeRoom
} = require('../controllers/ctlClsRoom');

router.post  ('/',    addRoom);
router.get   ('/:id', showRoom);
router.get   ('/',    showRooms);
router.put   ('/:id', updateRoom);
router.delete('/:id', removeRoom);

module.exports = router;