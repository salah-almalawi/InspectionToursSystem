const express = require('express');
const router = express.Router();
const inspectionRoundCtrl = require('../controllers/inspectionRoundController');
const auth = require('../middlewares/auth');

router.post('/', auth.check, inspectionRoundCtrl.create);
router.get('/', auth.check, inspectionRoundCtrl.list);

module.exports = router;