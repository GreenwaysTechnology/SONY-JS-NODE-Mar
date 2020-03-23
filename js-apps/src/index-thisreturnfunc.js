

const training = {
    teach: function () {
        //Teach js
        return function () {
            return this;
        }
    }
}
let teachJS = training.teach();
console.log(teachJS())
console.log(teachJS.call(training));
