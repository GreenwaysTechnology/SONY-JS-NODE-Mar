//set interval
let counter = 0;
const handler = () => {
    counter += 1;
    console.log(counter)
}
console.log('start')
let timerId = setInterval(handler, 1000);

//Stop the timer after 10000ms
//setTimeout(clearInterval, 10000, timerId);


//setTimeout(() => clearInterval(timerId), 10000);

console.log('end')