
//! Praktika -  Arraylar String methodları və keçirilən mövzulardan


let products = [
    {
        productName: "Asus ROG Rapture WiFi",
        price: 3000
    },
    {
        productName: "Asus ROG WiFi",
        price: 2500
    },
    {
        productName: "Lenova S340",
        price: 4000
    },
    {
        productName: "Hp Pavilion 123",
        price: 1200
    },
    {
        productName: "Lenova S450",
        price: 5000
    },
    {
        productName: "Lenova S470",
        price: 7600
    }
];


let searchProduct = prompt("Product Name Yazin").toUpperCase();


findProduct(products);

function findProduct(products) {

    let matchingProduct = [];

    products.forEach(function (product) {

        if (product.productName.toUpperCase().includes(searchProduct)) {
            matchingProduct.push(product);
        }
    })


    if (matchingProduct.length > 0) {
        printProduct(matchingProduct);
    } else {
        console.log("Product Tapilmadi");
    }

}

function printProduct(matchingProduct) {
    matchingProduct.forEach(function (product) {
        console.log(
            `
-----------------------------------------
            Product Name : ${product.productName}
            Price : ${product.price}
            `)
    })
}


























