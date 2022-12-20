'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      email: 'john@example.com',
    }, {
      name: 'Jane Doe',
      email: 'jane@example.com',
    }], {});
  },

  async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('users', null, {});
  }
};
