'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Tables', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            RestaurantId: {
                type: Sequelize.STRING,
                references: {
                    model: 'Restaurants',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            tableQRURL: {
                type: Sequelize.STRING
            },
            occupied: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Tables');
    }
};
