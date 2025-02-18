module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Product.associate = (models) => {
      Product.hasOne(models.Clothing);
      Product.hasOne(models.Electronics);
      Product.hasOne(models.Books);
      Product.hasOne(models.Groceries);
      Product.hasOne(models.Toys);
    };
  
    return Product;
  };
  