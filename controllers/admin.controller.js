const { adminService } = require('../services');
const { messages, codes } = require('../config');

module.exports = {
  addProductToDB: async (req, res, next) => {
    try{
      const { product } = req;

      await adminService.addProduct(product);

      res.json(codes.goodCodes.OK, messages.goodMessages.PRODUCT_CREATED);
    } catch (e) {
      next(e)
    }
  }
};
