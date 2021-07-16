const Sequelize = require("sequelize");

const driver = new Sequelize("heroes", "admin", "admin", {
  host: "localhost",
  dialect: "postgres",
  quoteIdentifiers: false,
  operatorsAliases: 0
});

async function main() {
  const Heroes = driver.define("heroes", {
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

  // await Heroes.create({
  //   name: "Batman",
  //   power: "Dinheiro"
  // });

  const heroes = await Heroes.findAll({
    raw: true,
    attributes: ["name"]
  });
  console.log('heroes', heroes);

}

main();