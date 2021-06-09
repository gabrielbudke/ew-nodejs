class ContextStrategy {
   constructor(strategy) {
      this._database = strategy;
   }

   create(item) {
      return this._database.create(item);
   }

   update(id) {
      return this._database.update(id);
   }

}

module.exports = ContextStrategy;