
// funciones que se declaran con la palabra reservada function
function Fn(){
    // retorna d¿solo las propiedades del this
    this.prop = 'propiedad';
    
}

Fn.prototype.lala = function funcionPrototipo(){}
const r = new Fn();
//console.log(r.__proto__);

// fat arrow function
console.log(this)
const fatFn = ()=> {// no tiene constecto de this
    //const obj = {}
    //obj.prop = 'propiedad'
    //return obj;
    this.prop = 'lala'
}
const r1 = fatFn();
console.log(this)

//console.log(r1);


// return implicito

const fnR = () => 2

console.log(fnR());

