const { obterPessoas } = require('./service');

Array.prototype.meuFilter = function(callback) {
   const lista = [];

   for(index in this) {
      const item = this[index];
      const resultado = callback(item, index, this);
      
      if(!resultado) {
         continue;
      }

      lista.push(item);
   }

   return lista;
}

async function main() {
   try {
      const { results } = await obterPessoas('a');

      // ==== Array.filter() =====
      // const familiaLars = results.filter(function(personagem) {         
      //    const isLars = personagem.name.toLowerCase().indexOf('lars') !== -1;
      //    return isLars;
      // });

      const familiaLars = results.meuFilter((personagem, index, lista) => {
         console.log(`[index]: ${index}`, lista.length);
         return personagem.name.toLowerCase().indexOf('lars') !== -1
      });

      const names = familiaLars.map((pessoa) => pessoa.name);
      console.log('[names]', names);
      
   } catch (error) {
      console.error('[error]', error);
   }

}

main();