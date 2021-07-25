//throw

/*function demandaAgregada(id = 500) {
    if (id <= 1000) {
        throw 'política fiscal expansionista'
    }

    console.log('política fiscal contracionista')
}

//try...catch
try {
    demandaAgregada()
} catch(e) {
    console.log(e)
}
*/



/* function PIBdePlenoEmprego (id = 1000) {
    if (id <= 500) {
    throw 'Aumenta o investimento público, deslocando a curva IS em busca do pleno emprego'
    }
    console.log ('Reduz a demanda agregada pois a economia esta super-aquecida e começando a aumentar a taxa de inflação')
}
try {
    PIBdePlenoEmprego ()
} catch(e) {
    console.log(e)
}
*/

function PIBdePlenoEmprego (id = 1000) {
    if (id <= 950)
    throw 'Aumenta o investimento público, deslocando a curva IS em busca do pleno emprego'
}
console.log('Reduz a demanda agregada pois a economia esta super-aquecida e começando a aumentar a taxa de inflação')
try {
    PIBdePlenoEmprego()
} catch(e) {
    console.log(e)
}

    


