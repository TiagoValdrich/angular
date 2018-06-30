export default class Carro {

    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0
    // private velocidade: number = 0 // Podemos instanciar os atributos de uma classe dessa forma, ou seja, fora do método construtor.

    constructor(modelo:string, numeroDePortas: number){
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }

}

export let qualquer_coisa = 'Teste'