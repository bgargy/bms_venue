const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: "bms-venue.ct62i2gi46ud.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "Pragna27", // Be cautious about storing sensitive information like passwords in your code.
    port: 3306,
    database: "bms_venue"
});

dbConnection.connect(function(err) {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to database");
});

module.exports = dbConnection;
