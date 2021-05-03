const { Router } = require('express');

const router = Router();

const adminRouter = require('./admin.router');
const authRouter = require('./authorization.router');
const productsRouter = require('./products.router');
const basketRouter = require('./basket.router');

router.use('/admin', adminRouter);
router.use('/auth', authRouter);
router.use('/products', productsRouter);
router.use('/basket', basketRouter);

module.exports = router;
