// Estudando o conceito de for, for-in e for-of através da chamada de uma API.

const service = require('./service');

async function main() {
   try {
      const response = await service.obterPessoas('a');      
      const names = [];

      // Trabalhando com for tradicionado
      console.time('[for]');
      for(let i = 0; i < response.results.length - 1; i++) {
         const personagem = response.results[i];
         names.push(personagem.name);
      }
      console.timeEnd('[for]');
      
      // Trabalhando com o for-in para iteração
      console.time('[for-in]');
      for(let i in response.results) {
         const personagem = response.results[i];
         names.push(personagem.name);
      }
      console.timeEnd('[for-in]');

      // Trabalhando com o for-of para iteração
      console.time('[for-of]');
      for (const personagem of response.results) {
         names.push(personagem.name);
      }
      console.timeEnd('[for-of]');

      console.log('[names]', names);

   } catch (error) {
      console.error('[error]', error);
   }
}

main();