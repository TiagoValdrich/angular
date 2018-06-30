export default class Veiculo {

    protected modelo: string = '';
    protected velocidade: number = 0;
    // private velocidade: number = 0 // Podemos instanciar os atributos de uma classe dessa forma, ou seja, fora do método construtor.

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