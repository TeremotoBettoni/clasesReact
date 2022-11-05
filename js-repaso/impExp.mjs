const chancoFeliz = ['chancho1','chancho2','chancho3']
const chancoTristes = ['triste1','triste2','triste3']
const otrosChanchos = []
// module.exports = {
//     chancoFeliz, chancoTristes
// }
const fn1 = () => {
    console.log ('soy una funcion 1')
}
function fn2 (){
    console.log('soy una funcion 2')
}

export {chancoTristes, otrosChanchos,fn1,fn2}
export default chancoFeliz;