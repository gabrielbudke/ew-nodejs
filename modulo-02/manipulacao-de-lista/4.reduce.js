const { obterPessoas } = require('./service');

Array.prototype.meuReduce = function(callback, valorInicial) {
   let valorFinal = valorInicial !== undefined ? valorInicial : this[0];

   for(let index = 0; index <= this.length - 1; index++) {
      valorFinal = callback(valorFinal, this[index]);
   }

   return valorFinal;
}


async function main() {
   try {
      const { results } = await obterPessoas('a');

      const alturas = results.map(personagem => {
         return parseInt(personagem.height);
      });

      console.log('[alturas]', alturas);

      // ============ Array.reduce() =========
      // const total = alturas.reduce((anterior, proximo) => {
      //    return anterior + proximo;
      // }, 0);

      const minhaLista = [
         ['Gabriel', 'Sousa'],
         ['Node', 'Java']
      ];
      
      const total = minhaLista.meuReduce((anterior, proximo) => {
         return anterior.concat(proximo)
      }, []).join(', ');

      console.log('[total]', total);

   } catch (error) {
      console.error('[error]', error);   
   }
}

main();