let n = [1, 1, 1, 1]
eliminaRepetidos(n, n.length)

function eliminaRepetidos(n, tamanho) {

    for (let i=0; i<tamanho; i++){
        for (let j=i+1; j<tamanho; j++){
            if (n[i] == n[j]) delete n[i]
        }
    }

    let nfinal = n.filter(function (i) {
        return i;
    });

    console.log(nfinal)
}
