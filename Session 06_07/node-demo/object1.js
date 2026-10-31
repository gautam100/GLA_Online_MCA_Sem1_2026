let product = {
  name: "Smart watch",
  price: 2000,
  img: "https:///images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  isAvailabe: true,
  fn1: function () {
    console.log("abc");
  },
}

console.log(product.name)//Smart watch
console.log(product.price)//2000

for(let key in product){
    console.log("Key:",key, "value: ",product[key])
}
