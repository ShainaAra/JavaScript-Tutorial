export let cart = JSON.parse(localStorage.getItem('cart'));
//get the cart from localstorage
//we need to convert it back into an array to convert it back to an array using JSON.parse.

if (!cart) { // default value if the cart is empty
    cart = [{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}]; 
}

//localstorage can only save strings. it will convert the cart into a string and we can save it in localstorage
function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));// covert cart into string, and we can sve it to localStrogae
}


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

    saveToStorage();
};


//function to remove a product
export function removeFromCart(productId){ //take the productId and remove it from the cart 
    const newCart = []; //new empty array

    cart.forEach((cartItem) => { //looop through the cart
        if (cartItem.productId !== productId) { // not equal to the product that were trying to remove
            newCart.push(cartItem) // added here
        }
    });

    cart = newCart;

    saveToStorage();
}; 