/**
 * Trabalhando com async/await para simular chamadas para um backend
 */
/**
 * 1 - Obter um usuário
 * 2 - Obter o número de telefone de um usuário a partir de seu ID
 * 3 - Obter o endereço do usuário pelo ID
 */

const util = require('util');

function obterUsuario() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         return resolve({
            id: 1,
            nome: 'Fulano da Silva',
            idade: 27,
            dataNascimento: new Date('1957-06-27'), 
         })
      }, 2000);
   });
};

function obterTelefone(idUsuario) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         return resolve({
            idUsuario,
            ddd: 47,
            telefone: '98547846'
         })
      }, 2000);
   });
};

function obterEndereco(idUsuario, callback) { 
   setTimeout(function() {
      return callback(null, {
         idUsuario,
         rua: 'Rua dos Bobos',
         numero: 0
      })
   }, 1500);
};

// Converte a função 'obterEndereco' para uma Promise
const obterEnderecoAsync = util.promisify(obterEndereco);

async function main() {
   try {
      const usuario = await obterUsuario();

      const data = await Promise.all([
         obterTelefone(usuario.id),
         obterEnderecoAsync(usuario.id)
      ]);

      const [ telefone, endereco ] = data;

      console.log('[usuario]', usuario);
      console.log('[telefone]', telefone);
      console.log('[endereco]', endereco);

      console.log('[usuario]', { ...usuario, ...telefone, ...endereco });
      
   } catch (error) {
      console.log('[error]', error);
   }
}

main();
