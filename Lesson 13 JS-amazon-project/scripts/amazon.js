import{cart} from '../data/cart.js';
let productsHTML = '';

//looping trough array of products... generating HTML using JS
products.forEach((product) => {
    productsHTML +=`
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}"> 
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-car-${product.id}"> 
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" 
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {//loop through each button .forEach()

        let addedMessageTimeoutId;

        button.addEventListener('click', () =>{
            //const productId = button.dataset.productId;
            const {productId} = button.dataset;//13h

            let matchingItem;

            cart.forEach((item) => {
                if (productId === item.productId) {
                    matchingItem = item; // if a product is already in the cart
                }
            });
            //13c
            const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`
            );
            
            //const quantity = quantitySelector.value; //13d
            const quantity = Number(quantitySelector.value); ///13e

            if (matchingItem) {
                //matchingItem.quantity += 1;
                matchingItem.quantity += quantity; //13e
            } else {
                cart.push({
                    //productId: productId,
                    //quantity: 1
                    //quantity : quantity //13e
                    productId, //13h
                    quantity  //13h
                });
            }
            //we need a varaible to store teh total quantity
            let cartQuantity = 0;

            //this is going to loop through each object in the cart
            cart.forEach((item) => {
              cartQuantity += item.quantity;
            });

            document.querySelector('.js-cart-quantity')
              .innerHTML = cartQuantity;

            const addedMessage = document.querySelector( //13j
              `.js-added-to-cart-${productId}`
            );

            addedMessage.classList.add('added-to-cart-visible') //13k

            /*setTimeout(() => { //13L
              addedMessage.classList.remove('added-to-cart-visible');
            }, 2000);*/


            //check if there's a previous timeout for this
            //const previousTimeoutId = addedMessageTimeouts[productId];

            if (addedMessageTimeoutId) {
              clearTimeout(addedMessageTimeoutIdTimeoutId);
            }

            const timeoutId = setTimeout(() => {
              addedMessage.classList.remove('added-to-cart-visible');
            }, 200);

            addedMessageTimeoutId = timeoutId;
        });
    });


