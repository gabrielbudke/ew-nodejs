const ContextStrategy = require("./strategies/context/ContextStrategy");
const Postgres = require("./strategies/Postgres");

const contextPostgres = new ContextStrategy(new Postgres());
