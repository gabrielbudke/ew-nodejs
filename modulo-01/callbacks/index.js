/**
 * Trabalhando com callbacks para simular chamadas para um backend
 */
/**
 * 1 - Obter um usuário
 * 2 - Obter o número de telefone de um usuário a partir de seu ID
 * 3 - Obter o endereço do usuário pelo ID
 */

function obterUsuario(callback) {
   setTimeout(function() {
      return callback(null, {
         id: 1,
         nome: 'Fulano da Silva',
         idade: 27,
         dataNascimento: new Date('1957-06-27')
      })
   }, 2000); 
};

function obterTelefone(idUsuario, callback) {
   setTimeout(function() {
      return callback(null, {
         idUsuario,
         ddd: 47,
         telefone: '98547846'
      })
   }, 1000);
};

function obterEndereco(idUsuario, callback) {   
   setTimeout(function() {
      return callback(null, {
         idUsuario,
         rua: 'Rua dos Bobos',
         numero: 0
      })
   }, 1500)
};


// Obter informações sobre o usuario a partir de callbacks
obterUsuario(function resolveUsuario(erro, usuario) {
   if(erro) {
      console.error('[error]', 'Usuário not found!');   
      return;
   }
   console.log('[usuario]', usuario);  

   obterTelefone(usuario.id, function resolveTelefone(erro, telefone) {
      if(erro) {
         console.error('[error]', 'Telefone not found!');
      }
      console.log('[telefone]', telefone);  

      obterEndereco(usuario.id, function resolveEndereco(erro, endereco) {
         if(erro) {
            console.error('[error]', 'Endereço not found!');
            return;
         }

         console.log('[endereco]', endereco);           

         console.log( { ...usuario, ...telefone, ...endereco });

      });
   }) 
});