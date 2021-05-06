const { Types } = require('mongoose');
const { productSchema } = require('../dataBase');

const { ObjectId } = Types;

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
  getAllProductCategory: async (category, skip) => productSchema.categorySchema.aggregate([
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
    },
    {
      $skip: skip
    },
    {
      $limit: 9
    }
  ]),
  // eslint-disable-next-line require-await
  getProductsSubCategory: async (subCategory, skip) => productSchema.subCategorySchema.aggregate([
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
    },
    {
      $skip: skip
    },
    {
      $limit: 9
    }
  ]),
  getDetailsOfProduct: (id) => productSchema.productSchema.find({ _id: `${id}` }),
  addComment: (user_id, product_id, comment) => productSchema.commentSchema.create({ user_id, product_id, comment }),
  addRate: (user_id, product_id, rate) => productSchema.rateSchema.create({ user_id, product_id, rate }),
  getRateOfProduct: (id) => productSchema.rateSchema.aggregate([{
    $group: {
      _id: '$product_id',
      avg: { $avg: '$rate' }
    }
  }, {
    $match: {
      _id: ObjectId(id)
    }
  }]),
  getCommentsProduct: (id, skip) => productSchema.commentSchema.aggregate([
    {
      $match: {
        product_id: ObjectId(id)
      }
    },
    {
      $lookup: {
        from: 'users',
        localField: 'user_id',
        foreignField: '_id',
        as: 'user'
      }
    },
    {
      $sort: {
        createdAt: -1
      }
    },
    {
      $skip: skip
    },
    {
      $limit: 5
    }
  ]),
  getNewProducts: (limit) => productSchema.productSchema.aggregate([{
    $sort: { createdAt: -1 }
  }, {
    $limit: limit
  }])
};
