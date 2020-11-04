/**
 * Trabalhando com callbacks para simular chamadas para um backend
 */
/**
 * 1 - Obter um usuário
 * 2 - Obter o número de telefone de um usuário a partir de seu ID
 * 3 - Obter o endereço do usuário pelo ID
 */

function obterUsuario(callback) {
   setTimeout(() => {
      return callback(null, {
         id: 1,
         nome: 'Gabriel Sousa',
         dataNascimento: new Date('1998-12-11')
      });
   }, 1000);
}

function obterTelefone(idUsuario, callback) {
   setTimeout(() => {
      return callback(null, {
         telefone: '987574878',
         ddd: 47
      });
   }, 2000);
}

function obterEndereco(idUsuario, callback) {
   setTimeout(() => {
      return callback(null, {
         rua: 'Rua dos Bobos',
         numero: 0
      });
   }, 2000);
}


obterUsuario(function resolverUsuario(erroUsuario, usuario) {
   if(erroUsuario) {
      console.error('DEU RUIM NO USUÁRIO:', erroUsuario);
      return;
   }

   obterTelefone(usuario.id, function resolverTelefone(erroTelefone, telefone) {
      if(erroTelefone) {
         console.error('DEU RUIM NO TELEFONE:', erroEndereco);
         return;
      }

      obterEndereco(usuario.id, function resolverEndereco(erroEndereco, endereco) {
         if(erroEndereco) {
           console.error('DEU RUIM NO ENDEREÇO:', erroEndereco);
           return;
         }

         console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}
         `)

      });

   });

});