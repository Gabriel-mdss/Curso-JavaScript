let agora = new Date()
let hora = agora.getHours()
console.log(`agora sao exatamente ${hora} horas`)
if (hora < 12){
    console.log('Bom dia!')
}else if (hora < 18){
    console.log('boa tarde!')
}else{
    console.log('boa noite!')
}