

//scope chain

//global scope
let x = 10;

function bar() {
    let y=9000;
    function zoo() {
        function myfun() {
            console.log(x);
            console.log(y);
        }
        myfun()
    }
    zoo()
}
bar();
//js scope chain loopkup
 // myfun record --->zoo record---bar record---global scope--|if not then throw error

