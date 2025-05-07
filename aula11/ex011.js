let ipais = document.querySelector('input#pais')
let btnv = document.querySelector('button#botaov')
let res = document.querySelector('p#resultado')
let r1 = document.querySelector('p#resul2')
let r2 = ''

btnv.addEventListener('click', function clicar(){
    r2 = ipais.value
    res.innerHTML = `seu país é ${r2} `

    if (r2 == 'Brasil'){
        r1.innerHTML = 'Você é <strong>Brasileiro!</strong>'
    }else
    {
        r1.innerHTML = 'Você é <strong>estrangeiro!</strong>'
    }
})

