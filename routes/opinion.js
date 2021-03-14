const router = require('express').Router();
const {
    addOpinion,
    showOpinion,
    showOpinions,
    updateOpinion,
    removeOpinion
} = require('../controllers/ctlClsOpinion');

router.post  ('/',    addOpinion);
router.get   ('/:id', showOpinion);
router.get   ('/',    showOpinions);
router.put   ('/:id', updateOpinion);
router.delete('/:id', removeOpinion);

module.exports = router;
