let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A
let aux = varC

//poderia ser [varA, varB, varC] = [varB, varC, varA]

varC = varA
varA = varB
varB = aux
 
console.log(varA, varB, varC)
