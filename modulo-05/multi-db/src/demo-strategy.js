class NotImplementedException extends Error {
   constructor() {
      super('Not Implemented Exception');
   }
}

class ICrud {
   create(item) {
      throw new NotImplementedException();
   }

   read(query) {
      throw new NotImplementedException();
   }

   update(id, item) {
      throw new NotImplementedException();
   }

   delete(id) {
      throw new NotImplementedException();
   }
}

class MongoDB extends ICrud {
   constructor() {
      super();
   }

   create(item) {
      console.log('[mongodb]: Item salvo!');
   }
}

class Postgres extends ICrud {
   constructor() {
      super();
   }

   create(item) {
      console.log('[postgres]: Item salvo!');
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

const mongoContext = new ContextStrategy(new MongoDB());
mongoContext.create();

const postgresContext = new ContextStrategy(new Postgres());
postgresContext.create();
