const { readFile, writeFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

// Outra forma de obter os dados de arquivo JSON
// const database = require('./heroes.json);

class Database {
    constructor() {
        this.FILE_NAME = 'heroes.json';
    }

    async obterDadosArquivos() {
        const file = await readFileAsync(this.FILE_NAME, 'utf8');
        return JSON.parse(file.toString());        
    };

    async escreverArquivos(dados) {
        await writeFileAsync(this.FILE_NAME, JSON.stringify(dados));
        return true;
    };

    async listar(id) {
        const data = await this.obterDadosArquivos();
        const heroFiltered = data.filter(hero => (id ? (hero.id === id) : true));
        return heroFiltered;
    };

    async cadastrar(hero) {
        // Objetivo: obter o arquivo modificar os dados e reescrever o arquivo
        const data = await this.obterDadosArquivos();
        const id = hero.id <= 2 ? hero.id : Date.now();

        const heroWithId = {
            id,
            ...hero
        };

        const newData = [
            ...data,
            heroWithId
        ];
        
        const response = await this.escreverArquivos(newData);

        return response;
    }

}

module.exports = new Database();