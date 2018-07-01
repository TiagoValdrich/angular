import { InterfaceDAO } from './InterfaceDAO';

export class DAO<T> implements InterfaceDAO<T> {
    
    nomeTabela:string = ''

    inserir(object: T): boolean {
        console.log("Lógica insert")
        return true;
    }

    atualizar(object: T): boolean {
        console.log("Lógica update")
        return true;
    }

    remover(id: number): T {
        console.log('lógica delete')
        return Object();
    }

    selecionar(id: number): T {
        console.log('lógica select')
        return Object();
    }

    selecionarTodos(): [T] {
        console.log('lógica getAll')
        return [Object()];
    }

}