function simpleArraySum(ar) {
    let sum = 0;
    ar.forEach(element => {
       sum += element 
    });
    return sum;
}

console.log(simpleArraySum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))
