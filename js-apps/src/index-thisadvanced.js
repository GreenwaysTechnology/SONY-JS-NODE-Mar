'use strict'

const training = {
    firstName: 'Subraamanian',
    teach: function () {
        //How to access instance variable 'firstName' inside nested
        //function

        // way 1 : calling on object directly
        /**function teachJs() {
            console.log(`Name ${this.firstName} `);
        }
        teachJs.call(training);**/

        //way 2: using self semantic concept : short cut
        // let self = this;
        // function teachJs() {
        //     console.log(`Name ${self.firstName} `);
        // }
        // teachJs.call(training);
        //Using arrow function
        //let teachJs = () => console.log(`Name ${this.firstName} `);
        // teachJs();
        return () => console.log(`Name ${this.firstName} `);

    }
}
let teachJs = training.teach();
teachJs();
//teachJs.call(training);