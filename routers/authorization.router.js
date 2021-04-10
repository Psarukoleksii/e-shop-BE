const { Router } = require('express');
const router = Router();

const { authController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

router.post(
  '/login',
  authMiddleware.isValidSignInFields,
  authMiddleware.isUserInDB,
  authController.signIn
);

router.post(
  '/register',
  authMiddleware.isEmailOrPhoneFree,
  authMiddleware.isValidUserRegister,
  authController.signUp
);

router.post(
  '/profile',
  authMiddleware.checkAccessToken,
  authController.profile
)

module.exports = router;
