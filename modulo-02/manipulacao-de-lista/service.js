const axios = require('axios');
//const baseURL = '/people';

const api = axios.create({
   baseURL: 'https://swapi.dev/api/'
});


async function obterPessoas(nome) {
   //const url = `${baseURL}/?search=${nome}`;
   const response = await api.get('/people', {
      params: {
         search: nome
      }
   });
   
   return response.data;
}

module.exports = { obterPessoas };