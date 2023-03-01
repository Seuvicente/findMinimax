// 55. Na teoria dos sistemas, define-se como elemento minimax de uma matriz o menor elemento da linha onde se
// encontra o maior elemento da matriz. Escreva um algoritmo que leia uma matriz 10 X 10 de números e encontre seu
// elemento minimax, mostrando também sua posição.

//Gero os numeros aleatórios e insere na matriz
const matriz = []
for(lin=0;lin<10;lin++){
    matriz[lin] = []
    for(col=0;col<10;col++){
        let aleatorio = Math.random()*100
        let num = aleatorio.toFixed(0)-1
        matriz[lin][col] = num
    }
}
//Encontra o maior valor dentro da matriz e a posição
let maior = matriz[0][0]
let posL
for(l=0;l<matriz.length;l++){
    for(c=0;c<matriz.length;c++){
        if(matriz[l][c] > maior){
            maior = matriz[l][c]
            posL = l
        }
    }
}
//Encontrando o minimax
let menor = matriz[posL][0],posM
for(m=0;m<=10;m++){
    if(matriz[posL][m] < menor ){
        menor = matriz[posL][m]
        posM = m
    }
}
//exibindo resultado
console.table(matriz)
console.log("Maior Elemento:",maior,"Linha:",posL,"Coluna:",posM,"Minimax:",menor)
