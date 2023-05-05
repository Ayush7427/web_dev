const customerCart = [
    {
        productId : 1 , 
        ProductName : " OnePlus 10R 5G " ,
        ProductQuantity : 1 ,
        ProductPrice : 42937 
    },
    {
        productId : 2 , 
        ProductName : "Fastrack Analog Watch " ,
        ProductQuantity : 2 ,
        ProductPrice : 850 
    },
    {
        productId : 3 , 
        ProductName : "Bata Shoes" ,
        ProductQuantity : 2 ,
        ProductPrice : 1000
    }
]
console.table(customerCart);

const cartP = () => {
    const price = customerCart.reduce((previous , current) => previous + current.ProductPrice ,0)
    return price
}
console.log("Total Price : ",cartP());

const quanTity = customerCart.reduce((previous , current) => previous + current.ProductQuantity ,0 )
console.log('Quantity : ',quanTity);
