'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kebunbinatang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kebunbinatang.init({
    id: {type : DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true},
    idhewan:{
      type: DataTypes.INTEGER,
      references: 'hewan',
      referencesKey: 'id'
    },
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kebunbinatang',
  });
  kebunbinatang.associate = function(models){
    kebunbinatang.belongsToMany(models.hewan,{through:'hewankebunbinatang',foreignKey:'idkebunbinatang'})
  }
  return kebunbinatang;
};