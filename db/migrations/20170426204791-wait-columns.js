

module.exports = {
    up(queryInterface, Sequelize) {
        queryInterface.addColumn('users', 'account_status',
            {
                type: Sequelize.STRING,
                defaultValue: "waiting",
                allowNull: false
            }
        );
        queryInterface.addColumn('users', 'sign_up_meta',
            {
                type: Sequelize.TEXT
            }
        );
        queryInterface.addColumn('accounts', 'created',
            {
                type: Sequelize.BOOLEAN
            }
        );
    },

    down(queryInterface, Sequelize) {
    }
};
