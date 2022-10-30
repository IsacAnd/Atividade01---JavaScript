let array = ['YMCA']
verificaArray(array)

function verificaArray(n) {
    if ( Array.isArray(n)){
        console.log('é array')
    } else console.log('n eh chapa')
}