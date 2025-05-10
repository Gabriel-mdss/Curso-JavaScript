function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        let fsex  = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >0 && idade < 10){
                img.setAttribute('src','menino.png')
                //crianca
            }else if (idade > 10 && idade <= 21){
                img.setAttribute('src','homemjovem.png')
                //jovem
            }else if (idade < 50){
                img.setAttribute('src','homemadulto.png')
                //adulto
            }else{
                img.setAttribute('src','senhor.png')
                //idoso
            }
        } else {
            genero = 'Mulher'
            if(idade >0 && idade < 10){
                img.setAttribute('src','menina.png')
                //crianca
            }else if (idade > 10 && idade <= 21){
                img.setAttribute('src','mulherjovem.png')
                //jovem
            }else if (idade < 50){
                img.setAttribute('src','mulheradulta.png')
                //adulto
            }else{
                img.setAttribute('src','senhora.png')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}