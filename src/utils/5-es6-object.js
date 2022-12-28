const name = "Chris"

const userAge = 19

const user = {
    name,
    age: userAge,
    location: "Kottayam"
}

console.log(user)

//Destrcture


const product = {
    label: 'Red notebook',
    price: 3,
    stock: 200,
    salePrice: undefined
}

// const label = product.label;
// const stock = product.stock;



const { label: productLabel, stock } = product;

console.log(stock, productLabel)

