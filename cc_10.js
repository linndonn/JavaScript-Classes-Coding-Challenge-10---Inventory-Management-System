//Task 1 - Created Product Class
//Creating a class Product with 4 properties name (string), id (number), price (number), stock (number)
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
};
//Add a getDetails() method that returns a formatted string of product details.
getDetails () {
return `Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock}`;
};
//Add a method updateStock(quantity) that modifies the stock level when an order is placed.
updateStock(quantity) {
this.stock -= quantity;
}; 
};

//Test Data
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"


//Task 2 - Created Order Class
//Creating a class Order with 3 properties order Id (number), product (instance of Product), quantity (number)
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
};
//Add a method getOrderDetails() that returns order details.
getOrderDetails () {
    return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}"`; 
}; 
};

//Test Data
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

