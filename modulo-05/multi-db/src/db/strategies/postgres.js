const ICrud = require('./interfaces/interfaceCrud');

class Postgres extends ICrud {

   constructor() {
      super();
   }

   create(item) {
      console.log('[postgres]: Item cadastrado com sucesso!');
   }

}

module.exports = Postgres;
