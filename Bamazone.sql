create database Bamazon

use Bamazon

create table products (
item_id integer not null auto_increment,
product_name varchar(100),
department_name varchar(100),
price integer(100),
stock_quantity integer(100),
primary key (item_id));


insert into products (item_id, product_name, department_name, price, stock_quantity)
values (1, "phone", "electronics", 20, 90), (2, "television", "electronics", 50, 70),
(3, "couch", "furnitures", 35, 50), (4, "chair", "furnitures", 40, 60),
(5, "basketball", "sports", 10, 70), (6, "football", "sports", 10, 40),
(7, "fridge", "appliances", 80, 30), (8, "oven", "appliances", 70, 30),
(9, "apple", "food", 5, 90), (10, "butter", "food", 4, 90);

