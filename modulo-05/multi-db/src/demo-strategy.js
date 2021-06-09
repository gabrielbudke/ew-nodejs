/**
 * Arquivo para demonstração do conceito do 
 * design pattern Strategy
 */

// Cria uma classe de Erro customizada para quando 
// um método não for implementado 
class NotImplementedException extends Error {
   constructor() {
      super('Not implemented exception')
   }
}

// Cria a interface/classe para Strategy
class ICrud {
   create(item) {
      throw new NotImplementedException();
   }

   update(id) {
      throw new NotImplementedException();
   }
}

// Classe de estratégia para MongoDB
class Mongo extends ICrud {
   constructor() {
      super();
   }

   create(item) {
      console.log('[MongoDB]: Creating item with MongoBD');
   }
}

// Classe de estratégia para Postgres
class Postgres extends ICrud {
   constructor() {
      super();
   }

   create(item) {
      console.log('[Postgres]: Creating item with Postgres');
   }
}


class ContextStrategy { 
   constructor(strategy) {
      this._database = strategy;
   }

   create(item) {      
      return this._database.create(item);
   }
}

const contextMongo = new ContextStrategy(new Mongo());
contextMongo.create();

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.create();