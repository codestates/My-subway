'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Associations
const { user, post, posts_ingredient, like, ingredient, ingredientType } = sequelize.models;
like.belongsTo(user, {
  foreignKey: 'user_id',
});
user.hasMany(like, {
  foreignKey: 'user_id',
});
post.hasMany(like, {
  foreignKey: 'post_id',
});
like.belongsTo(post, {
  foreignKey: 'post_id',
});
user.hasMany(post, {
  foreignKey: 'user_id',
});
post.belongsTo(user, {
  foreignKey: 'user_id',
});
post.hasMany(posts_ingredient, {
  foreignKey: 'post_id',
});
posts_ingredient.belongsTo(post, {
  foreignKey: 'post_id',
});
posts_ingredient.belongsTo(ingredient, {
  foreignKey: 'ingredient_id',
});
ingredient.hasMany(posts_ingredient, {
  foreignKey: 'ingredient_id',
});
ingredientType.hasMany(ingredient, {
  foreignKey: 'type_id',
});
ingredient.belongsTo(ingredientType, {
  foreignKey: 'type_id',
});

module.exports = db;
