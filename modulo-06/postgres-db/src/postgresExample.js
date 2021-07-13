const { Sequelize, DataTypes } = require("sequelize");

const driver = new Sequelize("heroes", "admin", "admin", {
  host: "localhost",
  dialect: "postgres",
  quoteIdentifiers: false,
  operatorsAliases: 0
});

async function main() {
  const Heroes = driver.define("heroes", {
    id: {
      type: DataTypes.INTEGER,
      required: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    power: {
      type: DataTypes.STRING,
      required: true
    }
  }, {
    tableName: "heroes",
    freezeTableName: false,
    timestamps: false
  });

  await Heroes.sync();

  await Heroes.create({
    name: "Lanterna Verde",
    power: "Anel"
  });

  const heroes = await Heroes.findAll({ raw: true });
  console.table(heroes);

}

main();