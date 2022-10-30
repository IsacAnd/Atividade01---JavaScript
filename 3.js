let array = ['oi', 'tchau']
retornaArray(array)

function retornaArray (n, m) {
    if (m != null) {
        for (let i=0; i<m ;i++) {
            console.log(n[i])
        }
    }
    else console.log(n[0])
}