const textInput = document.getElementById('hello') as HTMLInputElement;
textInput.value = 'Hello World';
const button = document.querySelector('.btn') as HTMLButtonElement;
const numInput = document.querySelector('#num') as HTMLInputElement;
numInput.value = '10';
console.log(numInput.valueAsNumber);
button.addEventListener('click', (e:Event) => {
    console.log(textInput.value);
});

