'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Restaurant = sequelize.define('Restaurant');
    class Owner extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.Restaurant);
        }
    }
    Owner.init(
        {
            userId: DataTypes.STRING,
            password: DataTypes.STRING,
            fullName: DataTypes.STRING
        },
        {
            sequelize,
            modelName: 'Owner'
        }
    );
    return Owner;
};
