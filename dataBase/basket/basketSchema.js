const { Schema, model } = require('mongoose');

const basketSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  products: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    count: { type: Number }
  }]
});

module.exports = model('Basket', basketSchema);
