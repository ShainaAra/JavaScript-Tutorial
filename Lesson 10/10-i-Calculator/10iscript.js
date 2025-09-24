let calculation = localStorage.getItem('calculation') || '';

// Display the calculation when the page first loads.
displayCalculation();

//when you click a button
function updateCalculation(value) {
    calculation += value; //add the new value to the current calculation

// Display the calculation on the page
displayCalculation();

localStorage.setItem('calculation', calculation);//save the updated calculation so it remembers it later
}

function displayCalculation() {
    document.querySelector('.js-calculation')
        .innerHTML = calculation;
}