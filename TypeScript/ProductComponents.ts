import { ProductService } from "./ProductServices";
import { ProductDetails } from "./ProductDetails";



let product = new ProductService();

let p1 = {
    productName: "HP-101",
    cost: 12000,
    category: "Laptop"
}
let p2 = {
    productName: "Dell-101",
    cost: 10000,
    category: "Laptop"
}
let p3 = {
    productName: "Asus",
    cost: 15000,
    category: "Laptop"
}

product.addProduct(p1);
console.log("added");
product.addProduct(p2);
console.log("added");
product.addProduct(p3);
console.log("added");




let P: ProductDetails[] = product.getAllProducts();
for (let i in P) {
    console.log("Product name : " + P[i].productName + " -Product cost :" + P[i].cost + " -Product category : " + P[i].category);
}

console.log("based on cost");
let P1: ProductDetails[] = product.getProductsBasedOnCost();
for (let i in P1) {
    console.log("Product name : " + P1[i].productName + " -Product cost :" + P1[i].cost + " -Product category : " + P1[i].category);
}

let p5 = {
    productName: "Apple",
    cost: 18000,
    category: "Laptop"
};

product.addProduct(p5);
console.log("added");
let P2: ProductDetails[] = product.getAllProducts();
for (let i in P2) {
    console.log("Product name : " + P2[i].productName + " -Product cost :" + P2[i].cost + " -Product category : " + P2[i].category);
}



