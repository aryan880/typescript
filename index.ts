import products from './products';

let shipping : number;
let taxPercent : number;
let total : number;
let shippingAddress : string;

let productName : string = products[0].name;
let product = products.filter((product) => {
  return product.name === productName;
})[0]; 

console.log(product);
if(product.preOrder === true){
  console.log("Notification will be sent");
}
if(Number(product.price) >= 25){
  shipping = 0;
  console.log("Shipping is Free!!")
}
else{
  shipping = 5;
}