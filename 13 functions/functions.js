// funcition expression
//function anonymous

//parâmetros (parameters)
/*const sum = function(number1, number2){
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25
sum(number1, number2) // arguments- argumentos

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
*/

/*const multiplicadorDeGastos = function(number1, number2, number3, number4, number5){
    console.log(number1/(number2 - number3 *(number4 - number5)))

}
multiplicadorDeGastos(1, 1, 0.83, 1, 0.6450)
*/
let rendaDeEquilibrio = function(gastosAutonomos,multiplicadorDeGastos) {
    total = (gastosAutonomos * multiplicadorDeGastos)
    return total
}

let gastosAutonomos = 105495.85
let multiplicadorDeGastos = 1.4177358758063372

console.log(`Os gastos autonomos são de R$ ${gastosAutonomos}`)
console.log(`O multiplicador de gastos é de R$ ${multiplicadorDeGastos}`)
console.log(`A renda de equilibrio dessa economia é de R$ ${rendaDeEquilibrio(gastosAutonomos, multiplicadorDeGastos)}`)
