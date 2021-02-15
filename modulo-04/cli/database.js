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

   async remover(id) {
      
      if(!id) {
         return await this.escreverArquivos([])
      }

      const dados = await this.obterDadosArquivos();
      const indice = dados.findIndex(item => item.id === parseInt(id));

      if(indice === -1) {
         throw Error('O usuário informado não existe!');
      }

      dados.splice(indice, 1);

      return await this.escreverArquivos(dados);

   }

   async atualizar(id, modificacoes) {
      
      const dados = await this.obterDadosArquivos();
      const indice = dados.findIndex(item => item.id === parseInt(id));

      if(indice === -1) {
         throw Error('O herói informado não existe');
      }

      const atual = dados[indice];
      const objetoAtualizado = {
         ...atual,
         ...modificacoes
      };      
               
      dados.splice(indice, 1);

      return await this.escreverArquivos([
         ...dados,
         objetoAtualizado
      ]);      
   };

}

module.exports = new Database();