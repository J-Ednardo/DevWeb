let num = prompt('Digite um numero:')
const numeroTitulo = document.getElementById("numero-titulo")
numeroTitulo.innerHTML = num
const squart = document.getElementById("raiz-quadrada")
let raizQuadrada = Math.sqrt(num)
squart.innerHTML = raizQuadrada
const inteiro = document.getElementById("isInt")
let isint = Number.isInteger(num)
inteiro.innerHTML = isint
const nan = document.getElementById("isNaN")
let isnan = Number.isNaN(num)
nan.innerHTML = isnan
const arredondab = document.getElementById("ab")
let arredondadoParaBaixo = Math.floor(num)
arredondab.innerHTML = arredondadoParaBaixo
const arredodnaC = document.getElementById("ac")
let arredondadoParaCima = Math.ceil(num)
arredodnaC.innerHTML = arredondadoParaCima
const casasdecimais = document.getElementById("casas")
let comDuasCasasDecimais = Number(num).toFixed(2)
casasdecimais.innerHTML = comDuasCasasDecimais


