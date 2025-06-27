

const express = require('express');
const router = express.Router();
const managerCtrl = require('../controllers/managerController');
const auth = require('../middlewares/auth');

router.post('/', auth.check, managerCtrl.create);
router.get('/', auth.check, managerCtrl.list);
router.get('/:id/summary', auth.check, managerCtrl.summary);

module.exports = router;