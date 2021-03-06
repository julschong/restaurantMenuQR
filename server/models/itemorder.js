'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ItemOrder extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Item);
            this.belongsTo(models.Order);
        }
    }
    ItemOrder.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                autoIncrement: false
            },
            TtemId: DataTypes.STRING,
            OrderId: DataTypes.STRING
        },
        {
            sequelize,
            modelName: 'ItemOrder'
        }
    );
    return ItemOrder;
};
