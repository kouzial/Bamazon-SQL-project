var inquirer = require("inquirer");
var mysql = require("mysql");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "Bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    display();
    search();
});
var display = function () {

    connection.query("select item_id, product_name, price, stock_quantity from products", function (err, res) {
        console.table(res);
    });

}

var search = function () {

    inquirer.prompt([{
        type: "input",
        message: "select ID",
        choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        name: "item"


    },
    {
        type: "input",
        message: "Select Unit",
        name: "unit"
    }]).then(function (user) {

        if (user.item === "1" && user.unit < 100) {

             connection.query("update products where stock_quantity - 10", function (err, res) {
        console.table(res);
    });
            display();



        }

    }



        )
};

