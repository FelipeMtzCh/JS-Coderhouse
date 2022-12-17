console.log("Linkeado");

const stock = [];
let productName = document.querySelector("#name");
let productId = document.querySelector("#ID");
let productPrice = document.querySelector("#price");
const buttonAdd = document.querySelector(".btnCreate");

buttonAdd.onclick = () => {
    function Product(product, id, price){
        this.product = product;
       this.id = id;
       this.price = price;
    }
   const products = new Product(
       product = productName.value.toUpperCase(),
       id = productId.value,
       price = productPrice.value
    );

    alert("Producto agregado");
    productName.value = "";
    productId.value = '';
    productPrice.value = '';
    stock.push(products);
    console.log(stock);
}