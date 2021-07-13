class ContextStrategy {
  constructor(strategy) {
    this._database = strategy;
  }

  create(item) {
    return this._database.create(item);
  }

  update(item) {
    return this._database.update(item);
  }

  isConnected() {
    return this._database.isConnected();
  }

}

module.exports = ContextStrategy;