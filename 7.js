let n = [3, 4, 3, 4, 3, 4, 4, 4]
let tam = n.length
maisFrequente(n, tam)

function maisFrequente(n, tamanho) {
  let cont = 0
  let aux = 0
  let frq = 0

  for (let i = 0; i < tamanho; i++) {
    aux = 0
    for (let j = i + 1; j < tamanho; j++)
      if (n[i] == n[j]) aux++

    if (cont < aux) {
      cont = aux
      frq = n[i]
    }
  }

  console.log('O numero que mais se repete é ' + frq + ', aparecendo ' + (cont + 1) + ' vezes')
}
