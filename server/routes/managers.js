

const express = require('express');
const router = express.Router();
const managerCtrl = require('../controllers/managerController');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const rules = require('../middlewares/validationRules');

router.post('/', auth.check, validate(rules.managerCreateRules), managerCtrl.create);
router.get('/', auth.check, managerCtrl.list);
router.get('/:id/summary', auth.check, managerCtrl.summary);
router.get('/:id', auth.check, managerCtrl.getById);
router.put(
  '/:id',
  auth.check,
  validate(rules.managerUpdateRules),
  managerCtrl.update
);
router.delete('/:id', auth.check, managerCtrl.remove);

module.exports = router;