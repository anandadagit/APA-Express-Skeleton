module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define('Books', {
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      publicationDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  
    Books.associate = (models) => {
      Books.belongsTo(models.Product)
    };
  
    return Books;
  };
  
  