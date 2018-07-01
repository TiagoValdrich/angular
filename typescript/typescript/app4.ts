import { DAO } from './DAO';
// import { PessoaDAO } from './PessoaDAO';
// import { ConcessionariaDAO } from "./ConcessionariaDAO";

import Concessionaria from "./Concessionaria"
import Pessoa from './Pessoa';

// let dao: ConcessionariaDAO = new ConcessionariaDAO();
// let dao2: PessoaDAO = new PessoaDAO();

let concessionaria = new Concessionaria('', []);
let pessoa = new Pessoa('','');

let dao3: DAO<Concessionaria> = new DAO<Concessionaria>();
let dao4: DAO<Pessoa> = new DAO<Pessoa>();

dao3.inserir(concessionaria);
dao4.remover(5);