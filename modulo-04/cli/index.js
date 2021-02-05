const Commander = require('commander');
const Database = require('./database');
const Heroi = require('./heroi');

async function main() {
   Commander
      .version('v1')
      .option('-n, --nome [value]', "nome do heroi")      
      .option('-p, --poder [value]', "poder do heroi")
      .option('-c, --cadastrar', "cadastrar um heroi")      
      .parse(process.argv);

      const heroi = new Heroi(Commander.opts());

   try {            

      if(Commander.opts().cadastrar) {         
         const resultado = await Database.cadastrar(heroi);

         if(!resultado) {
            console.error('Herói não foi cadastrado!');
         }

         console.log('Herói cadastrado com sucesso!');

      }
      
   } catch (error) {
      console.log('[error]', error)
   }
}

main();