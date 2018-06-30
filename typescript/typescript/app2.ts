import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria';

/* --- criar carros --- */
let carroA = new Carro("dodge journey", 4);
let carroB = new Carro("veloster", 3);
let carroC = new Carro("cerato", 4);

/* --- montar a lista de carros da concessionaria --- */

                    //Carro[]
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];
let concessionaria = new Concessionaria("Av Paulista", listaDeCarros);

/* *** exibir a lista de carros *** */
// console.log(concessionaria.mostrarListaDeCarros());

// comprar o carro

let cliente = new Pessoa("Tiago Valdrich", "veloster");
// console.log(cliente.dizerCarroPreferido());

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()){

        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem());