const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: { type: String },
  image: { type: String },
  price: { type: Number },
  producer: { type: String },
  mass: { type: Number },
  weight: { type: String },
  counterInStorage: { type: Number },
  counterOfPurchases: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = model('Product', productSchema);
