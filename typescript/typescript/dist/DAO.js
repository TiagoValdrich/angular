"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAO = /** @class */ (function () {
    function DAO() {
        this.nomeTabela = '';
    }
    DAO.prototype.inserir = function (object) {
        console.log("Lógica insert");
        return true;
    };
    DAO.prototype.atualizar = function (object) {
        console.log("Lógica update");
        return true;
    };
    DAO.prototype.remover = function (id) {
        console.log('lógica delete');
        return Object();
    };
    DAO.prototype.selecionar = function (id) {
        console.log('lógica select');
        return Object();
    };
    DAO.prototype.selecionarTodos = function () {
        console.log('lógica getAll');
        return [Object()];
    };
    return DAO;
}());
exports.DAO = DAO;
