"use strict";
const textInput = document.getElementById('hello');
textInput.value = 'Hello World';
const button = document.querySelector('.btn');
const numInput = document.querySelector('#num');
numInput.value = '10';
console.log(numInput.valueAsNumber);
button.addEventListener('click', (e) => {
    console.log(textInput.value);
});
