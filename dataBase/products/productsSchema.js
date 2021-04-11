const { Schema, model } = require('mongoose');

const productSubSchema = new Schema({
  name: { type: String },
  image: { type: String },
  producer: { type: String },
  mass: { type: Number },
  weight: { type: String },
  counterInStorage: { type: Number },
  counterOfPurchases: { type: Number }
}, { timestamps: true });

const productSchema = new Schema({
  category: { type: String },
  products: [productSubSchema],
}, { timestamps: true });

module.exports = model('Product', productSchema);
