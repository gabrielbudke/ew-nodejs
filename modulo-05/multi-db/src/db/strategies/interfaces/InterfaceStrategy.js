class NotImplementedException extends Error {
   constructor() {
      super('Method is not implemented!');
   }
}

class InterfaceStrategy {
   constructor() {

   }

   create(item) {
      throw new NotImplementedException();
   }

   update(id) {
      throw new NotImplementedException();
   }

   isConnected() {
      throw new NotImplementedException();
   }

}

module.exports = InterfaceStrategy;