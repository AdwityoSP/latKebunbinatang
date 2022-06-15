'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hewankebunbinatang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hewankebunbinatang.init({
    idhewan:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'hewan',
      referencesKey: 'id'
    },
    idkebunbinatang: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'kebunbinatang',
      referencesKey: 'id'
    },
  }, {
    sequelize,
    modelName: 'hewankebunbinatang',
  });
  hewankebunbinatang.associate = function(models){
    hewankebunbinatang.belongsTo(models.kebunbinatang,{foreignKey:'idkebunbinatang'})
    hewankebunbinatang.belongsTo(models.hewan,{foreignKey:'idhewan'})
  }
  return hewankebunbinatang;
};