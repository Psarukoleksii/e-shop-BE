const { Schema, model } = require('mongoose');

const RatingSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  product_id: { type: Schema.Types.ObjectId, ref: 'Product' },
  rate: { type: Number },
});

module.exports = model('Rating', RatingSchema);
