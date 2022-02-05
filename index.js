const Customer = require('./customer')
const Driver = require('./driver')

const burak = new Customer("Burak");
const mehmet = new Driver("Mehmet");


const order1 = burak.order(mehmet, "Burger King 7. Cadde", "Emek mah. Bişkek cad. No: 125/3");
const order2 = burak.order(mehmet, "Gülçimen Aspava", "Emek mah. Bişkek cad. No: 125/3");
const order3 = burak.order(mehmet, "Subway", "Emek mah. Bişkek cad. No: 125/3");
const order4 = burak.order(mehmet, "McDonalds", "Emek mah. Bişkek cad. No: 125/3");

function printOrder(order){
    console.log(`${order.customer.name} ordered from ${order.restaurant} to ${order.destination} (Deliverer: ${order.driver.name}) `);
}

function printOrderHistory(customer){
    customer.orders.forEach(printOrder);
}



printOrderHistory(burak);