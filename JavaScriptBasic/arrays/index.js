let alunos = ['Luiz', 'Maria', 'Joao']
alunos[0] = 'Ednardo'
alunos[3] = 'Fernanda'
alunos.push('Eduarda') // adiciona no final
alunos.push('Cristiano Ronaldo') 
alunos.unshift('Messi') // adiciona no inicio
//const removido = alunos.pop() //remove do final
//const removido1 = alunos.shift() //remove do inicio
console.log(alunos.length)
console.log(alunos[0])
console.log(alunos)
console.log(typeof alunos)
console.log(alunos instanceof Array)
