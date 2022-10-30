let n = ['oi', 'tchau', 'bomdia', 'boatarde', 'boanoite']
retornaArray(n, 2)

function retornaArray (n, m) {
    if (m != null) {
        for (let i=n.lenght-1; i>m ;i--) {
            console.log(n[i])
        }
    }
    else console.log(n[n.length-1])
}
