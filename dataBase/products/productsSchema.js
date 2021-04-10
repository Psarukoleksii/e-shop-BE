const { Schema, model } = require('mongoose');

const productSubSchema = {
  name: {type: String},
  image: {type: String},
  producer: {type: String},
  mass: {type: Number},
  weight: {type: String},
  counterInStorage: {type: Number},
  counterOfPurchases: {type: Number}
};

const productSchema = new Schema({
  category: {type: String},
  product: productSubSchema,
}, {timestamps: true});

module.exports = model('Product', productSchema);

