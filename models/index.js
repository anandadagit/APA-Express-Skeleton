const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database.js');

const sequelize = new Sequelize({
  dialect: config.dialect,
  storage: config.storage
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Product = require('./product.js')(sequelize, DataTypes);
db.Clothing = require('./clothing.js')(sequelize, DataTypes);
db.Electronics = require('./electronics.js')(sequelize, DataTypes);
db.Books = require('./books.js')(sequelize, DataTypes);
db.Groceries = require('./groceries.js')(sequelize, DataTypes);
db.Toys = require('./toys.js')(sequelize, DataTypes);

// Set up associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;

