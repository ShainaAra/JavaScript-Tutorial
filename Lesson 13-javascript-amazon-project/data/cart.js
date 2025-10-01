export const cart = []; // array of objects

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) { 
            matchingItem = cartItem;
        }
    });
    
    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

    const quantity = Number(quantitySelector.value);

    if (matchingItem) {
        //matchingItem.quantity += 1;
        matchingItem.quantity += quantity;//13E
    } else {
        cart.push({
            productId: productId,
            //quantity: 1
            //quantity: quantity//13E
            productId,
            quantity
        });
    }
};