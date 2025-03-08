/*
&& -> false && true -> false "O valor mesmo"
|| -> true || false -> true "retorna o valor mesmo"

FALSY
false 0
'' "" ``
null/undefined
NaN
*/

function falarOi() {
    return 'oi'
}

let vaiExecutar = 'Ednardo';

//console.log(vaiExecutar && falarOi())

console.log(0 || false || null || "Ednardo" || true)


