import { PessoaDAO } from './PessoaDAO';
import { ConcessionariaDAO } from "./ConcessionariaDAO";
import Concessionaria from "./Concessionaria"
import Pessoa from './Pessoa';

let dao: ConcessionariaDAO = new ConcessionariaDAO();
let dao2: PessoaDAO = new PessoaDAO();

let concessionaria = new Concessionaria('', []);
let pessoa = new Pessoa('','');

dao.inserir(concessionaria);
dao2.atualizar(pessoa)