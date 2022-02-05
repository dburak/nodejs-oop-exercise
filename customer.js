const Order = require('./order')

class Customer {
    constructor(name){
        this.name = name;
        this.orders = [];
    }

    order(driver, restaurant, destination){
        const order = new Order(driver, this, restaurant, destination);
        this.orders.push(order);

        return order;
    }
}



module.exports = Customer