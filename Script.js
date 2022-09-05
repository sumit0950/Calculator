let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let displayValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            displayValue += buttonText;
            screen.value = displayValue;
        }
        else if (buttonText =='AC'){
            displayValue = "";
            screen.value = displayValue;
        }
        else if (buttonText =='='){
            screen.value = eval(displayValue);

        }
        else{
            displayValue += buttonText;
            screen.value = displayValue;
        }
    })
}