const ContextStrategy = require('./db/strategies/base/contextStrategy');
const Postgres = require('./db/strategies/postgres');
const MongoDb = require('./db/strategies/mongodb');

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.create();

const contextMongo = new ContextStrategy(new MongoDb());
contextMongo.create();