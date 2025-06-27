const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController');
const validate = require('../middlewares/validate');
const rules = require('../middlewares/validationRules');

router.post('/register', validate(rules.registerRules), authCtrl.register);

// تسجيل الدخول
router.post('/login', validate(rules.loginRules), authCtrl.login);

// تسجيل الخروج
router.post('/logout', authCtrl.logout);

module.exports = router;