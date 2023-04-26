const count = document.querySelector('#counter');
console.log(count)

function increment(){
    let value = parseInt(count.innerText);
    value++;
    count.innerText = value;
}

function decrement(){
    let value = parseInt(count.innerText);
    value--;
    count.innerText = value;
}