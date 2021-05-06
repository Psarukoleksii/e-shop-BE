const { basketSchema, productSchema } = require('../dataBase');

module.exports = {
  buyProduct: async (wishProducts, products) => {
    const result = await basketSchema.basketSchema.create(wishProducts);
    for (const number of result.products) {
      for (const elem of products) {
        if (elem._id.toString() === number.product_id.toString()) {
          elem.counterInStorage -= number.count;
          elem.counterOfPurchases++;
          elem.save();
        }
      }
    }
  },
  verifyIsCountProductInStorage: async (objOrder) => {
    const products = [];
    for (const elem of objOrder.products) {
      const product = await productSchema.productSchema.findOne({ _id: elem.product_id });
      if (product.counterInStorage >= elem.count) {
        products.push(product);
      } else {
        return [];
      }
    }
    return products;
  }
};
