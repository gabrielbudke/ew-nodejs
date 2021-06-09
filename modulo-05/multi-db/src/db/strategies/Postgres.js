const InterfaceStrategy = require('./interfaces/InterfaceStrategy');

class Postgres extends InterfaceStrategy {
   constructor() {
      super();
   }   

   create(item) {
      console.log('[Postgres]: Creating item with postgres');
   }
}

module.exports = Postgres;