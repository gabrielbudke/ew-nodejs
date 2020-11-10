/**
 * Trabalhando com promises para simular chamadas para um backend
 */
/**
 * 1 - Obter um usuário
 * 2 - Obter o número de telefone de um usuário a partir de seu ID
 * 3 - Obter o endereço do usuário pelo ID
 */

const util = require('util');

function obterUsuario() {
   return new Promise(function(resolve, reject) {
      setTimeout(() => {
         return resolve({
            id: 1,
            nome: 'Fulano da Silva',
            idade: 27,
            dataNascimento: new Date('1957-06-27'), 
         })
      }, 2000);
   })
};

function obterTelefone(idUsuario) {
   return new Promise(function(resolve, reject) {
      setTimeout(() => {
         return resolve({
            idUsuario,
            ddd: 47,
            telefone: '98547846'
         });
      }, 1000);
   })
}

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

obterUsuario().then(function(usuario) {   
   return obterTelefone(usuario.id).then(function(telefone) {
      return { ...usuario, ...telefone };
   });

}).then(function(data) {   

   return obterEnderecoAsync(data.id).then(function(endereco) {      
      return { ...data, endereco }
   });

}).then(function(result) {
   console.log('[result]', result);
})
.catch(function(erro) {
   console.error('[error][Promise error]', erro);
});