const InterfaceStrategy = require("./interface/InterfaceStrategy");

class Postgres extends InterfaceStrategy {
  constructor() {
    super();
    this.connection = true;
  }

  create(item) {
    return "[postgres]: creating with postgres";
  }

  isConnected() {
    return this.connection;
  }


}

module.exports = Postgres;