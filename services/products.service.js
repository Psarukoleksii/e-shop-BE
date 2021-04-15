const { productSchema } = require('../dataBase');

module.exports = {
  // eslint-disable-next-line require-await
  getAllCategories: async () => productSchema.categorySchema.aggregate([{
    $lookup: {
      from: 'subcategories',
      localField: '_subCategory_id',
      foreignField: '_id',
      as: 'subCategory'
    }
  }]),
  // eslint-disable-next-line require-await
  getSubCategories: async (category) => productSchema.categorySchema.aggregate([{
    $match: {
      category: `${category}`
    }
  }, {
    $lookup: {
      from: 'subcategories',
      localField: '_subCategory_id',
      foreignField: '_id',
      as: 'subCategory'
    }
  }]),
  // eslint-disable-next-line require-await
  getAllProductCategory: async (category) => productSchema.categorySchema.aggregate([
    {
      $match: {
        category: `${category}`
      }
    },
    {
      $unwind: '$_subCategory_id'
    },
    {
      $lookup: {
        from: 'subcategories',
        localField: '_subCategory_id',
        foreignField: '_id',
        as: 'subCategory'
      }
    },
    {
      $unwind: '$subCategory'
    },
    {
      $lookup: {
        from: 'products',
        localField: 'subCategory._products_id',
        foreignField: '_id',
        as: 'products'
      }
    },
    {
      $group: {
        _id: '$products'
      }
    },
    {
      $unwind: '$_id'
    },
    {
      $replaceRoot: { newRoot: '$_id' }
    }
  ]),
  getProductsSubCategory: async (subCategory) => productSchema.subCategorySchema.aggregate([
    {
      $match: {
        subCategory: `${subCategory}`
      }
    },
    {
      $unwind: '$_products_id'
    },
    {
      $lookup: {
        from: 'products',
        localField: '_products_id',
        foreignField: '_id',
        as: 'products'
      }
    },
    {
      $group: {
        _id: '$products'
      }
    },
    {
      $unwind: '$_id'
    },
    {
      $replaceRoot: { newRoot: '$_id' }
    }
  ]),
  getDetailsOfProduct: async (id) => productSchema.productSchema.find({ _id: `${id}` }),
  addComment: async (user_id, product_id, comment) => productSchema.commentSchema.create({ user_id, product_id, comment }),
  addRate: async (user_id, product_id, rate) => productSchema.rateSchema.create({ user_id, product_id, rate }),
};
