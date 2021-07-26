'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.addColumn('Restaurants', 'MenuId', {
            type: Sequelize.STRING,
            references: {
                model: 'Menus',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        });
        return queryInterface.addColumn('Restaurants', 'OwnerId', {
            type: Sequelize.STRING,
            references: {
                model: 'Owners',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        });
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.removeColumn(
            'Restaurants', // name of Source model
            'menuId' // key we want to remove
        );

        return queryInterface.removeColumn(
            'Restaurants', // name of Source model
            'ownerId' // key we want to remove
        );
    }
};
