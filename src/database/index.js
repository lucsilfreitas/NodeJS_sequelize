const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

const User = require('../models/User');
const Address = require('../models/Adress');
const Course = require('../models/Course');


User.init(connection);
Address.init(connection);
Course.init(connection);

Address.associate(connection.models);
User.associate(connection.models);
Course.associate(connection.models);

/*
try{

    connection.authenticate();
    console.log('Conectado com sucesso!');
} catch (error) {
    console.error('A conexão falhou', error);
}
*/

module.exports = connection;