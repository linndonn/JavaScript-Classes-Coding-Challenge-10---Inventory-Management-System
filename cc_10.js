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


//Task 3 - Created Inventory Class
//Creating a class Inventory with a products (array of Product instances).
class Inventory {
    constructor() {
        this.products = [];
        //****Task 4 -Adding a orders array to Inventory Class****/
        this.orders = [];
};
//Add a method addProduct(product) that adds a new product to the inventory.
addProduct(product) {
    this.products.push(product);
};
//Add a method listProducts() that logs all the products details.
listProducts() {
   return this.products.forEach(product => console.log(product.getDetails()));
};

//****//Task 4 - Add method listOrders()- Creates a new order and adds it to orders if stock is available **
placeOrder(orderId, product, quantity) { 
    if (product.stock >= quantity) {
        let order  = new Order(orderId, product, quantity); 
        this.orders.push(order); 
    } else {
        return `Out of Stock: ${product.name}. Amount in Stock: ${product.stock}`; 
    };
};
//Task 4 - Add method listOrders()
listOrders() { 
    this.orders.forEach(order => console.log(order.getOrderDetails())); 

};
//******Task 5 - Implemented Product Restocking*****
restockProduct(productId, quantity){
//Add a method restockProduct(productId, quantity) in the Inventory class. The method should increase the stock of the product
let product = this.products.find(product => product.id === productId); //Finds product based on productId
        if (product) {
            product.stock += quantity;
        };
        };
        };

//Test Data Task 3
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Test Data Task 4
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"

//Test Data Task 5 
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"