const ICrud = require('../interfaces/interfaceCrud');

class ContextStrategy {

   constructor(strategy) {
      this._database = strategy;
   }

   create(item) {
      return this._database.create(item);
   }
   
}

module.exports = ContextStrategy;