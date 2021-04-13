const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  category: { type: String },
  _subCategory_id: [{ type: Schema.Types.ObjectId, ref: 'SubCategory' }]
}, { timestamps: true });

module.exports = model('Category', categorySchema);
