import {cart, calculateCartQuantity} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/money.js';


//calculate the Items
export function renderPaymentSummary() {
// create a variable to save the result of adding them together
    let productPriceCents = 0;
    let shippingPriceCents = 0; // adds all the shipping costs together
    const totalItems = calculateCartQuantity(); //calculate the quantity:


    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId); //each cart item has the product ID... save the product into variable
        productPriceCents += product.priceCents * cartItem.quantity;
        //calculate the shipping costs

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId); // each cart has a delivery option ID 
        //get the price for the delivery option using
        shippingPriceCents += deliveryOption.priceCents;
    });

    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents;


    //store the HTML
    const paymentSummaryHTML = `
        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
            <div>Items (${totalItems}):</div>
            <div class="payment-summary-money">
                $${formatCurrency(productPriceCents)}
            </div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">
                $${formatCurrency(shippingPriceCents)}
            </div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">
                $${formatCurrency(totalBeforeTaxCents)}
            </div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">
                $${formatCurrency(taxCents)}
            </div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">
                $${formatCurrency(totalCents)}
            </div>
        </div>

        <button class="place-order-button button-primary">
            Place your order
        </button>
    `;

    document.querySelector('.js-payment-summary')
        .innerHTML = paymentSummaryHTML;
}