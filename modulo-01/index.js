/**
 * Trabalhando com callbacks para simular chamadas para um backend
 */
/**
 * 1 - Obter um usuário
 * 2 - Obter o número de telefone de um usuário a partir de seu ID
 * 3 - Obter o endereço do usuário pelo ID
 */
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
   return new Promise(function (resolve, reject) {
      setTimeout(() => {
         return resolve({
            id: 1,
            nome: 'Fulano da Silva',
            dataNascimento: new Date('1957-06-27')
         });
      }, 1000);
   });
}

function obterTelefone(idUsuario) {
   return new Promise(function (resolve, reject) {
      setTimeout(() => {
         return resolve({
            telefone: '987574878',
            ddd: 47
         });
      }, 2000);
   });
}

function obterEndereco(idUsuario, callback) {
   setTimeout(() => {
      return callback(null, {
         rua: 'Rua dos Bobos',
         numero: 0
      });
   }, 2000);
}


// UTILIZANDO O CONCEITO DE ASYNC/AWAIT 
async function main() {
   
   try {
      console.time('[medida-promise]');
      
      const usuario = await obterUsuario();
      // const telefone = await obterTelefone(usuario.id);
      // const endereco = await obterEnderecoAsync(usuario.id);
      const resultado = await Promise.all([
         obterTelefone(usuario.id),
         obterEnderecoAsync(usuario.id),
      ]);

      const telefone = resultado[0];
      const endereco = resultado[1];

      console.log(`
         Nome: ${usuario.nome}
         Endereco: ${endereco.rua}, ${endereco.numero}
         Telefone: (${telefone.ddd})${telefone.telefone}
      `)      

      console.timeEnd('[medida-promise]');

   } catch (error) {
      console.error('DEU RUIM', error);
   }
   
}

main();

// ================ UTILIZANDO O CONCEITO DE PROMISES ===================
// obterUsuario()
//    .then(function(usuario) {
//       return obterTelefone(usuario.id)
//          .then(function(telefone) {
//             return {
//                usuario: {
//                   id: usuario.id,
//                   nome: usuario.nome,
//                   dataNascimento: usuario.dataNascimento,
//                },
//                telefone: telefone
//             }
//          })
//    })
//    .then(function(resultado) {
//       const endereco = obterEnderecoAsync(resultado.usuario.id);
//       return endereco.then(function(endereco) {
//          return { ...resultado, endereco }
//       })
//    })
   
//    .then(function(resultado) {
//       console.log('[resultado]:', resultado);   
//    })
   
//    .catch(function(error) {
//       console.log('DEU RUIM NA PROMISE', error);
//    })
// =====================================================================


// ================ UTILIZANDO O CONCEITO DE CALLBACKS =================

// obterUsuario(function resolverUsuario(erroUsuario, usuario) {
//    if(erroUsuario) {
//       console.error('DEU RUIM NO USUÁRIO:', erroUsuario);
//       return;
//    }

//    obterTelefone(usuario.id, function resolverTelefone(erroTelefone, telefone) {
//       if(erroTelefone) {
//          console.error('DEU RUIM NO TELEFONE:', erroEndereco);
//          return;
//       }

//       obterEndereco(usuario.id, function resolverEndereco(erroEndereco, endereco) {
//          if(erroEndereco) {
//            console.error('DEU RUIM NO ENDEREÇO:', erroEndereco);
//            return;
//          }

//          console.log(`
//             Nome: ${usuario.nome},
//             Endereco: ${endereco.rua}, ${endereco.numero}
//             Telefone: (${telefone.ddd})${telefone.telefone}
//          `)

//       });

//    });

// });