//Exception handling

function validate(num) {
    try {

        if (num <= 10) {
            throw new Error('Number is less than 10')
        }
        console.log(`Num ${num}`);


    } catch (err) {
        console.dir(err);
        throw err; //rethrowing...
    }
    finally {
        console.log('Done!')
    }
}
validate(12)
validate(1)