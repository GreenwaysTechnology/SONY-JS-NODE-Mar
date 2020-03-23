//nested function and this keyword
'use strict'


const training = {
    name: 'training',
    teach: function () {

        function teachJS() {
            //this is for teachJS method
            return this;
        }
        //call method
        //Who is owner here for teachJS.
        console.log('TeachJS owner')
        console.log(teachJS());
        //how to bind teachJS with training.
        //way 1:
        console.log(teachJS.call(training));

        //this is for teach method
        return this;


    }
}
//on which object we are calling teach method
//on which object you are calling he is owner

let result = training.teach();
console.log(result);