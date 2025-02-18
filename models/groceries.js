// TODO: Implement the Groceries model
// Expected fields:
// - expirationDate: Date
// - nutritionalInfo: String
// - organic: Boolean

module.exports = (sequelize, DataTypes) => {
    const Groceries = sequelize.define('Groceries', {
      expirationDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nutritionalInfo: {
        type: DataTypes.STRING,
        allowNull: false,        
      },
      organic: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultBalue: false,
      }
    });
  
    Groceries.associate = (models) => {
     Groceries.belongsTo(models.Product)};
  
    return Groceries;
  };
  
  