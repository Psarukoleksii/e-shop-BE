const { Router } = require('express');

const router = Router();

const adminRouter = require('./admin.router');
const authRouter = require('./authorization.router');
const productsRouter = require('./products.router');

router.use('/admin', adminRouter);
router.use('/auth', authRouter);
router.use('/products', productsRouter);

module.exports = router;
