const { model, Schema } = require('mongoose');

const CommentSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  product_id: { type: Schema.Types.ObjectId, ref: 'Product' },
  comment: { type: String },
}, { timestamps: true });

module.exports = model('Comment', CommentSchema);
