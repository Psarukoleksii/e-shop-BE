const { Router } = require('express');
const router = Router();

const authRouter = require('./authorization.router');
const adminRouter = require('./admin.router');

router.use('/auth', authRouter);
router.use('/admin', adminRouter);

module.exports = router;
