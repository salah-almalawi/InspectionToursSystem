const express = require('express');
const router = express.Router();
const inspectionRoundCtrl = require('../controllers/inspectionRoundController');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const rules = require('../middlewares/validationRules');

router.post(
  '/',
  auth.check,
  validate(rules.roundCreateRules),
  inspectionRoundCtrl.create
);
router.get('/', auth.check, inspectionRoundCtrl.list);
router.get('/:id', auth.check, inspectionRoundCtrl.getById);

module.exports = router;