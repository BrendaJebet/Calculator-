let display = document.querySelector('#screen')

function calcNumbers(x){
    display.value = display.value + x;
    console.log(x)
}

function mainFunction(y){
    console.log(y)
    if(y === 'AC'){
        display.value = "";
    }else if(y === 'del'){
         let arr = display.value.split('');
        arr.pop();
        display.value = arr.join('')
    }
}