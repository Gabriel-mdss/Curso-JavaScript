function carregar(){
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')
    let data = new Date()
    let hora = 21
    //let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#FFFFE0'
    }else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#FFA500'
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#00008B'

    }
}

