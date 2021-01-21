const assert = require('assert');
const database = require('./database');

const DEFAULT_HERO = {
    id: 1,
    name: 'Flash',
    power: 'Speed'
};

describe('Suite de manipulação de Herois', () => {
    before(async () => {
        await database.cadastrar(DEFAULT_HERO);
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
});