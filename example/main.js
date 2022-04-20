function numbers(number1, number2) {
    if (number1 < number2) {
        console.log("number1 больше чем number2")
    } else{
        console.log("number2 больше чем number1")
    }
}
const number = {
    number1: 5,
    number2: 2
}
numbers(1, 2)



function twoMass(ex11, ex22) {
    if (ex11.length < ex22.length) {
        console.log("ex11 больше чем ex22")
    } else {
        console.log("ex22 больше чем ex11")
    }
}
const array = {
    ex11: [55,22,33],
    ex22: [66,33,21,44]
}
twoMass(11, 22)

