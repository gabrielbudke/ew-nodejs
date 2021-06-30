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

   isConnected() {
      return this._database.isConnected();
   }

}

module.exports = ContextStrategy;