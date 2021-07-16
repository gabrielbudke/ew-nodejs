const { Sequelize } = require("sequelize");
const InterfaceStrategy = require("./interface/InterfaceStrategy");

class Postgres extends InterfaceStrategy {
  constructor() {
    super();
    this._connection = null;
    this._heroes = null;
    this._connect();
  }

  create(item) {
    return ">> [postgres]: creating with postgres";
  }

  async isConnected() {
    try {
      console.log(">> [postgres]: connecting to database...");
      await this._connection.authenticate();

      console.log(">> [postgres]: connnected to database!");
      return true;

    } catch (error) {
      console.error(">> [postgres]", error);
      return false;
    }
  }

  _connect() {
    this._connection = new Sequelize(
      "heroes",
      "admin",
      "admin", {
      host: "localhost",
      dialect: "postgres",
      quoteIdentifiers: false,
      operatorsAliases: 0
    }
    );
  }

  async defineModel() {
    this._heroes = driver.define("heroes", {
      id: {
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        required: true
      },
      power: {
        type: Sequelize.STRING,
        required: true
      }
    }, {
      tableName: "heroes",
      freezeTableName: false,
      timestamps: false
    });

    await Heroes.sync();
  }

}

module.exports = Postgres;