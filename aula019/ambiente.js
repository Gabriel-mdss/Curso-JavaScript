/*Para criar um vetor/array */ let num = [5, 8, 2, 9, 3]
/*Para adicionar um valor dentro do array */ num.push(1)
/*Para ordenar o array em ordem crescente */num.sort()
/*Para mostrar o array no console*/console.log(num)
/*Para contar quantas posições tem o array*/console.log(`O vetor tem ${num.length} posições`)
/*Para mostrar um valor especifico do array*/console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1){
    console.log('o valor nao foi encontrado!')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
