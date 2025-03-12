const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody)
const corBranca = "rgb(255, 255, 255)"


for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = corBranca
}
