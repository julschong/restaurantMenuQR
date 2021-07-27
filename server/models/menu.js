'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Menu extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.Item);
        }
    }
    Menu.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                autoIncrement: false
            },
            title: DataTypes.STRING,
            bannerURL: DataTypes.STRING,
            OwnerId: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: 'Menu'
        }
    );
    return Menu;
};
