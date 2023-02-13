const number1Element = document.querySelector('#number1');
const number2Element = document.querySelector('#number2');
const addElement = document.querySelector('#add');
const subElement = document.querySelector('#sub')
const resultElement = document.querySelector('#result');
const clearElement = document.querySelector('#clear');

function getNumberValues() {
    const number1 = parseInt(number1Element.value);
    const number2 = parseInt(number2Element.value);
    return [number1, number2];
}

function add(number1, number2) {
    return number1 + number2;
}
function sub(number1, number2) {
    return number1 - number2;
}
function checkNumbers(number1, number2) {
    return isNaN(number1) || isNaN(number2);
}
function onClick(event) {
    const numbers = getNumberValues();

    if(checkNumbers(...numbers)) {
        alert("Molimo unesite dva broja");
        return;
    }

    if(event.target.id ==='add') {
        resultElement.value = add(...numbers);
    } else if (event.target.id === 'sub') {
        resultElement.value = sub(...numbers);
    }

}

addElement.addEventListener('click', onClick);
subElement.addEventListener('click', onClick);

    //const result = add(numbers[0], numbers[1]);
    //add(...numbers);
    //add.apply(this,numbers);
    //resultElement.value = add(...numbers);



   
   // const result = number1 - number2;
   // resultElement.value = result;
   //resultElement.value = sub(...numbers);


clearElement.addEventListener('click', function (event) {
    number1Element.value = '';
    number2Element.value = '';
    resultElement.value = '';
}); 