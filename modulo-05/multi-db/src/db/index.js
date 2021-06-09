const ContextStrategy = require('./strategies/context/ContextStrategy');
const Postgres = require('./strategies/Postgres');
const MongoDb = require('./strategies/MongoDb');

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.create();

const contextMongo = new ContextStrategy(new MongoDb());
contextMongo.create();