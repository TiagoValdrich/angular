"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDAO.prototype.inserir = function (object) {
        console.log("Lógica insert");
        return true;
    };
    PessoaDAO.prototype.atualizar = function (object) {
        console.log("Lógica update");
        return true;
    };
    PessoaDAO.prototype.remover = function (id) {
        console.log('lógica delete');
        return new Pessoa_1.default('', '');
    };
    PessoaDAO.prototype.selecionar = function (id) {
        console.log('lógica select');
        return new Pessoa_1.default('', '');
    };
    PessoaDAO.prototype.selecionarTodos = function () {
        console.log('lógica getAll');
        return [new Pessoa_1.default('', '')];
    };
    return PessoaDAO;
}());
exports.PessoaDAO = PessoaDAO;
