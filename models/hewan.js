'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hewan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hewan.init({
    id: {type : DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true},
    nama: DataTypes.STRING,
    jenis: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hewan',
  });
  hewan.associate = function(models){
    hewan.belongsToMany(models.kebunbinatang,{through:'hewankebunbinatang',foreignKey:'idhewan'})
  }
  return hewan;
};