const ICrud = require('./interfaces/interfaceCrud');

class MongoDB extends ICrud {
   constructor() {
      super();
   }

   create(item) {
      console.log('[mongodb]: Item cadastrado com sucesso!');
   }
}

module.exports = MongoDB;
