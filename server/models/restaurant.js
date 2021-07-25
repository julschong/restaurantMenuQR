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
            this.hasMany(models.Location);
            this.belongsTo(models.Owner, { foreignKey: 'ownerId' });
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
            ownerId: DataTypes.STRING
        },
        {
            sequelize,
            modelName: 'Restaurant'
        }
    );
    return Restaurant;
};
