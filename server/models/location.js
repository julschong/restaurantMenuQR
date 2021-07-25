'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Location extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Menu);
        }
    }
    Location.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                autoIncrement: false
            },
            restaurantId: DataTypes.STRING,
            menuId: DataTypes.STRING,
            address: DataTypes.STRING,
            phoneNumber: DataTypes.STRING
        },
        {
            sequelize,
            modelName: 'Location'
        }
    );
    return Location;
};
