'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Tables', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            locationId: {
                type: Sequelize.STRING,
                references: {
                    model: 'Locations',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
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
