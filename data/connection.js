const Sequelize = require('sequelize');


const dbName = 'ihale_db'; 
const dbUser = 'root';     
const dbPass = 'root';     

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+03:00', 
    dialectOptions: {
        dateStrings: true,
        typeCast: true
    },
    define: {
        timestamps: false
    }
});

module.exports = sequelize;