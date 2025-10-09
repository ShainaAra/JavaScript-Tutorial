export const deliveryOptions = [{ //array of objects
    id: '1', 
    deliveryDays: 7,
    priceCents: 0
}, {
    id: '2',
    deliveryDays: 3,
    priceCents: 499
}, {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}];


export function getDeliveryOption(deliveryOptionId) {

    let deliveryOption;
    //look for matching Id
    deliveryOptions.forEach((option) => {
      if (option.id === deliveryOptionId) {
        deliveryOption = option; // save inside the variable
      }
    });
    return deliveryOption || deliveryOption[0];
    //default value if we don't find a delivery option
}