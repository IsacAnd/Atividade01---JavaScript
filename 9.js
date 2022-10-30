let n = [1, 2, 4, 5, 7]
let n2 = [1, 2, 4, 5, 6]

somaArray(n, n2, 5)

function somaArray(n, n2, tamanho) {
    let n3 = []
    for (let i=0; i < tamanho; i++){
        n3[i] = n[i] + n2[i]
    }

    console.log(n3)
}