function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       // resultado.innerHTML = 'Impossivel contar!'
        alert('Erro. FALTAM DADOS!')
    } else {
        resultado.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('Passo invalido! Considerando Passo 1')
            p = 1
        }
        if (i < f){
            //contagem crescente
           for(let c = i; c <= f; c += p){
            resultado.innerHTML += ` ${c} \u{1f449}` 
            }
        }else{
            //contagem regressiva
            for(let c = i; c >= f; c-= p){
                resultado.innerHTML += `${c} \u{1f449}`
            }
            resultado.innerHTML += `\u{1F3C1}`
        }
        
    }
}