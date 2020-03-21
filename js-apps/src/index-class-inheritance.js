
class Account {
    constructor(firstName = 'firstName') {
        this.firstName = firstName;
        console.log('Account is initalized')
    }
    //methods
    withdraw(amount) {
        return 100 *amount;
    }
}
Account.prototype.secKey = 'XXX@#$#$'
Account.prototype.deposit = function(){
    return 0;
}

class SavingsAccount extends Account {
    constructor(firstName) {
        super(firstName);//call super class constructor
        console.log('SavingsAccount is initalized')
    }
    //redefining
    withdraw() {
        return 100888 * super.withdraw(899);
    }
}
let sb = new SavingsAccount('Subramanian');
console.log(`${sb.firstName} withdraw ${sb.withdraw()} ${sb.deposit()} ${sb.secKey}`)