import Veiculo from './Veiculo'

export default class Carro extends Veiculo {

    private numeroDePortas: number
    // private velocidade: number = 0 // Podemos instanciar os atributos de uma classe dessa forma, ou seja, fora do método construtor.

    constructor(modelo: string, numeroDePortas: number){
        super()
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

}