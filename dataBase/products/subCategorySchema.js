const { Schema, model } = require('mongoose');

const subCategorySchema = new Schema({
  subCategory: { type: String },
  _products_id: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
}, { timestamps: true });

module.exports = model('SubCategory', subCategorySchema);
