"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DAO_1 = require("./DAO");
// import { PessoaDAO } from './PessoaDAO';
// import { ConcessionariaDAO } from "./ConcessionariaDAO";
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
// let dao: ConcessionariaDAO = new ConcessionariaDAO();
// let dao2: PessoaDAO = new PessoaDAO();
var concessionaria = new Concessionaria_1.default('', []);
var pessoa = new Pessoa_1.default('', '');
var dao3 = new DAO_1.DAO();
var dao4 = new DAO_1.DAO();
dao3.inserir(concessionaria);
dao4.remover(5);
