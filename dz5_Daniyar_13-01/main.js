const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const schetchik = document.getElementById('schetchik')
const reset = document.getElementById('reset')
let num = 0 ;

plus.onclick = () => {
    num++
    schetchik.innerText = num.toString()
}
minus.onclick = () => {
    num--
    if (num < 1){
        num = 0
    }
    schetchik.innerText = num.toString()
}
reset.onclick = () => {
    num = 0
    schetchik.innerText = num.toString()
}