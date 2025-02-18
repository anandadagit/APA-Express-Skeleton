// TODO: Implement the Toys model
// Expected fields:
// - ageGroup: String
// - material: String
// - batteryOperated: Boolean

module.exports = (sequelize, DataTypes) => {
    const Toys = sequelize.define('Toys', {
      ageGroup: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      material: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      batteryOperated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    });
  
    Toys.associate = (models) => {
      Toys.belongsTo(models.Product)};    

    return Toys;
  };
  
  