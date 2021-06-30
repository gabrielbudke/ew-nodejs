class NotImplementedException extends Error {
  constructor() {
    super('Method not implemented!');
  }
}

class InterfaceStrategy {
  constructor() { }

  create(item) { 
    throw new NotImplementedException();
  }

  update(id, item) { 
    throw new NotImplementedException();
  }

  isConnected() { 
    throw new NotImplementedException();
  }

}

module.exports = InterfaceStrategy;