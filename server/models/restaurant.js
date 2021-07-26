'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Restaurant extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Owner, { foreignKey: 'OwnerId' });
            this.belongsTo(models.Menu, { foreignKey: 'MenuId' });
        }
    }
    Restaurant.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                autoIncrement: false
            },
            name: DataTypes.STRING,
            OwnerId: {
                type: DataTypes.STRING,
                references: {
                    model: 'Owners',
                    key: 'id'
                }
            },
            MenuId: {
                type: DataTypes.STRING,
                references: {
                    model: 'Menus',
                    key: 'id'
                }
            }
        },
        {
            sequelize,
            modelName: 'Restaurant'
        }
    );
    return Restaurant;
};
