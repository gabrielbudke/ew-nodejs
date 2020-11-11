const service = require('./service');

Array.prototype.meuMap = function(callback) {
   const novoArrayMapeado = [];  
   
   for (let index = 0; index < this.length - 1; index++) {      
      const resultado = callback(this[index], index);
      novoArrayMapeado.push(resultado);
   }

   return novoArrayMapeado;
}

async function main() {
   try {
      const response = await service.obterPessoas('a');      
      
      //==== Array.forEach() =====
      //  const names = [];
      // response.results.forEach(personagem => {
      //    names.push(personagem.name);
      // });    

      // ===== Array.map() =======
      // const names = response.results.map(personagem => {
      //    return personagem.name;
      // });      

      const names = response.results.meuMap(function(personagem, indice) {
         return `[${indice}]${personagem.name}`;
      });
      
      console.log('[names]', names);

   } catch (error) {
      console.error('[error]', error);
   }
}

main();