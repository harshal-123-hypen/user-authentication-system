const mysql = require("mysql");

const connection = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "",

    database: "user_auth"

});

connection.connect((err) => {

    if(err){
        console.log("Database Connection Failed");
    }
    else{
        console.log("Database Connected");
    }

});