//if...else

/* let temperature = 39


if(temperature >= 37) {
    console.log('Febre')

} else {
    console.log('Saudável')
}
*/

/* let metaInflacao = 2
let InflacaoAlta = metaInflacao >= 3.5
let InflacaoNaMeta = metaInflacao < 3.5 && metaInflacao >= 2.5

if(InflacaoAlta) {
    console.log('COPOM aumenta a taxa de juros')
} else if (InflacaoNaMeta) {
    console.log('COPOM mantém a taxa de juros')
}else {
    console.log('COPOM diminui a taxa de juros')
}
*/

let  CambioDeEquilibrio = 4
let CambioApreciado = CambioDeEquilibrio >= 5
let CambioDepreciado = CambioDeEquilibrio < 5 && CambioDeEquilibrio > 2.5

if(CambioApreciado) {
    console.log ('Mais importações, menos importanções, industria perde competitividade')
} else if (CambioDepreciado) {
    console.log('Mais exportações, aumento da inflação, menos importações dificulta importações para produção industrial, favorável para o setor agricóla')
} else {
    console.log('Situação favorável para a competitividade industrial nacional, CETERIS PARIBUS')
}