import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

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

    return deliveryOption || deliveryOptions [0];
    //default value if we don't find a delivery option
}

function isWeekend(date) {
    const dayOfWeek = date.format('dddd');
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

export function calculateDeliveyDate(deliveryOption) {
    const today = dayjs();
    const deliveryDate = today.add(
        deliveryOption.deliveryDays,
        'days'
    );

    const dateString = deliveryDate.format(
        'dddd. MMMM D'
    );

  return dateString;
}




// function isWeekend(date) {
//   const dayOfWeek = date.format('dddd');
//   return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
// }

// export function calculateDeliveyDate(deliveryOption) {
//  let remainingDays = deliveryOption.deliveryDays;
//  let deliveryDate = dayjs();

//  while (remainingDays > 0) {
//   deliveryDate = deliveryDate.add(1, 'day');

//   if (isWeekend(deliveryDate)) {
//     remainingDays--;
//     // This is a shortcut for: remainingDays = remainingDays - 1;
    
//   }
//  }