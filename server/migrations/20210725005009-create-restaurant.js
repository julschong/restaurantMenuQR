'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Restaurants', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
            // ownerId: {
            //     allowNull: true,
            //     type: Sequelize.INTEGER,
            //     references: {
            //         model: {
            //             tableName: 'Owners',
            //             schema: 'public'
            //         },
            //         key: 'id'
            //     }
            // }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Restaurants');
    }
};
