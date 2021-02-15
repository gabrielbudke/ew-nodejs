const Commander = require('commander');
const Database = require('./database');
const Heroi = require('./heroi');

async function main() {
   Commander
      .version('v1')
      .option('-n, --nome [value]', "nome do heroi")      
      .option('-p, --poder [value]', "poder do heroi")      
      .option('-i, --id [value]', "id do heroi")      

      .option('-c, --cadastrar', "cadastrar um heroi")   
      .option('-l, --listar', 'listar um heroi')
      .option('-r,--remover', 'remover um heroi pelo id')   
      .option('-r, --remover', 'remover um heroi pelo id')   
      .option('-a, --atualizar [value]', 'atualizar um heroi pelo id')   
      .parse(process.argv);
            
      const heroi = new Heroi(Commander.opts());      

   try {       
      
      const options = Commander.opts();      

      if(options.cadastrar) {                 
         delete heroi.id;
         const resultado = await Database.cadastrar(heroi);

         if(!resultado) {
            console.error('Herói não foi cadastrado!');
         }

         console.log('Herói cadastrado com sucesso!');
      }

      if(options.listar) {
         const resultado = await Database.listar();
         console.log(resultado);
      }

      if(options.remover) {         
         const resultado = await Database.remover(heroi.id);         
         if(!resultado) {
            console.error('Não foi possível remover o herói');            
         }

         console.log('Heroi removido com sucesso!');
      }

      if(options.atualizar) {
         console.log(options);
         
         const idParaAtualizar = parseInt(options.atualizar);
         const dado = JSON.stringify(heroi);        
         const heroiAtualizado = JSON.parse(dado);         

         const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizado);    
         if(!resultado) {
            console.error('Não foi possível atualizar o heroi');
         }

         console.log('Heroi atualizado com sucesso!');         
      }


      
   } catch (error) {
      console.log('[error]', error)
   }
}

main();