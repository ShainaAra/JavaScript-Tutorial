import {cart} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';


//calculate the Items
export function renderPaymentSummary() {
// create a variable to save the result of adding them together
    let productPriceCents = 0;


    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId); //each cart item has the product ID... save the product into variable
        productPriceCents += product.priceCents * cartItem.quantity;
        //calculate the shipping costs
    });

    console.log(productPriceCents);
}