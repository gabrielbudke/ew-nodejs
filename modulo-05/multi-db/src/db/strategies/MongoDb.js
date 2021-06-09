const InterfaceStrategy = require('./interfaces/InterfaceStrategy');

class MongoDb extends InterfaceStrategy {
   constructor() {
      super();
   }

   create(item)  {
      console.log('[MongoDb]: Creating with mongodb');
   }

   update(id) {
      console.log('[MongoDb]: Updating with mongodb');
   }

}

module.exports = MongoDb;