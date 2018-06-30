import Carro from './Carro'
import Moto from "./Moto";

let carro = new Carro('Veloster', 3);
carro.acelerar();
carro.acelerar();

let moto = new Moto();
moto.acelerar();
moto.acelerar();

console.log(moto)
console.log(carro)