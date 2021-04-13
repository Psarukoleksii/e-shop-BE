const { adminService } = require('../services');
const { messages, codes } = require('../config');

module.exports = {
  addProductToDB: async (req, res, next) => {
    try {
      const { category, subCategory, ...products } = req.body;
      const { _id } = await adminService.addProduct(products);
      const id = await adminService.createSubCategory({ subCategory }, _id);
      await adminService.createCategory({ category }, id);

      res.json(messages.goodMessages.PRODUCT_CREATED).status(codes.goodCodes.CREATED);
    } catch (e) {
      next(e);
    }
  }
};
