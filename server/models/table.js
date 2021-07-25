'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Table extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Table.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                autoIncrement: false
            },
            locationId: DataTypes.STRING,
            tableQRURL: DataTypes.STRING,
            occupied: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: 'Table'
        }
    );
    return Table;
};
