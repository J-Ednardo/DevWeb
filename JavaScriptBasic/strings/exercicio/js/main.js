const nome = prompt('Digite seu nome completo:')
document.body.innerHTML += `Seu nome eh ${nome} <br />`
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`
document.body.innerHTML += `A segunda letra do seu nome eh: ${nome[1]} <br />`
document.body.innerHTML += `Qual o primeiro indice da letra a no seu nome: ${nome.indexOf('a')} <br />`
document.body.innerHTML += `Qual o ultimo indice da letra a no seu nome: ${nome.lastIndexOf('a')} <br />`
document.body.innerHTML += `As ultimas 3 letras do seu nome sao: ${nome.slice(-3)} <br />`
document.body.innerHTML += `Seu nome com letras maiusculas: ${toUpperCase(nome)} <br />`
document.body.innerHTML += `Seu nome com letras minusculas: ${toLowerCase(nome)} <br />`