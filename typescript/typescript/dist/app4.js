"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PessoaDAO_1 = require("./PessoaDAO");
var ConcessionariaDAO_1 = require("./ConcessionariaDAO");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var dao = new ConcessionariaDAO_1.ConcessionariaDAO();
var dao2 = new PessoaDAO_1.PessoaDAO();
var concessionaria = new Concessionaria_1.default('', []);
var pessoa = new Pessoa_1.default('', '');
dao.inserir(concessionaria);
dao2.atualizar(pessoa);
