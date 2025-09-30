let productsHTML = ''; //empty string ro hold all the prodduct

//loop through each product from the products array
products.forEach((product) => {
    productsHTML += `
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
            </div>s
        </div>

        <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
        <!--13b. Added a class to identify which product the dropdown is for-->
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

        <!--13I. Added a class to identify which product it is for-->
        <div class="added-to-cart js-added-to-cart-${product.id}"> 
            <img src="images/icons/checkmark.png">
            Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}"> 
            Add to Cart
        </button>
        </div>
    `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

//this add click event listeners to all the acc to cart button
document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () =>{

            //this get the productId from the data attributr of the clicked button
            //const productId = button.dataset.productId;
            const { productId } = button.dataset; //13H.uses destructuring

            let matchingItem;

            cart.forEach((item) => {
                if (productId === item.productId) { //check if the product is already in the cart
                    matchingItem = item;
                }
            });

            //13C. this line seletcting the dropdown element that...for the specific product that was added to the cart
            const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

            //13D. to get the value selected in the quantity
            //const quantity = quantitySelector.value;

            //13E. when updting the cart, instead of using a quantity, convert it into a number...Selects a quantity other than 1
            const quantity = Number(quantitySelector.value);


            // if a product is already in the cart it will increase the quantity
            if (matchingItem) {
                //matchingItem.quantity += 1;
                matchingItem.quantity += quantity;//13E
            } else {
                //if the product is not in the cart, add it with quantity 1
                cart.push({
                    productId: productId,
                    //quantity: 1
                    //quantity: quantity//13E
                    productId,//13H Shorthand property
                    quantity
                });
            }

            //store the total quantity...calculate total quantity of items in the cart
            let cartQuantity = 0; //to add the items quantity to this varaible

            //calculate the total quantity
            //this is going to loop through each object in the cart
            cart.forEach((item) => {
                cartQuantity += item.quantity; // add  all the quantities and save it too the variable cartQuantity
            });

            //update the cart quantity in the html if you click nay item
            document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

            //13J. use the DOM to get the 'Added' message element for the product
            const addedMessage = document.querySelector( 
                `.js-added-to-cart-${productId}`
            );
            //13K Add a class to the message element using .classList.add()
            addedMessage.classList.add('added-to-cart-visible') 

            //13L-M. After 2 seconds (use setTimeout), make the message disappear by removing the class.
            setTimeout(() => { 
                addedMessage.classList.remove('added-to-cart-visible');
            }, 2000);
        });
    });