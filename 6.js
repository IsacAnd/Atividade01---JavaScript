const numbers = [0, 2, 2, 3, 4, 6]
let i = 0

numbers.forEach(function() {
    if (ehPar(numbers[i]) && ehPar(numbers[i+1])){
        console.log(numbers[i]+ '-')
    }
    else console.log(numbers[i])
    i++
});

function ehPar(n) {
    if (n%2 == 0 ) return true
    else return false
}



