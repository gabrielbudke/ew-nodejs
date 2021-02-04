const assert = require('assert');
const database = require('./database');

const DEFAULT_HERO = {
    id: 1,
    name: 'Flash',
    power: 'Speed'
};

const DEFAULT_HERO_UPDATE = {
   id: 2,
   name: 'Lanterna Verde',
   power: 'Energia do Anel'
}

describe('Suite de manipulação de Herois', () => {
   before(async () => {
      await database.cadastrar(DEFAULT_HERO);
      await database.cadastrar(DEFAULT_HERO_UPDATE);
   });
   
   it('Deve pesquisa um herói', async () => {
      const expected = DEFAULT_HERO;       
      const [response] = await database.listar(expected.id);
      assert.deepEqual(response, expected);
   });   
   
   it('Deve cadastrar um herói', async () => {
      const expected = DEFAULT_HERO;
      const response = await database.cadastrar(DEFAULT_HERO);
      const [actual] = await database.listar(DEFAULT_HERO.id);
      assert.deepEqual(actual, expected);
   });

   it('Deve remover um herói por id', async () => {
      const expected = true;      

      const response = await database.remover(DEFAULT_HERO.id);      

      assert.deepEqual(response, expected);
   });

   it('Deve atualizar um herói pelo id', async () => {
      const expected = {
         ...DEFAULT_HERO_UPDATE,
         name: 'Batman',
         power: 'Dinheiro'
      };

      const novoDado = {
         name: 'Batman',
         power: 'Dinheiro'
      }

      await database.atualizar(DEFAULT_HERO_UPDATE.id, novoDado);
      const [response] = await database.listar(DEFAULT_HERO_UPDATE.id);

      assert.deepEqual(response, expected);
   });

});