const axios = require('axios');

const api = axios.create({
   baseURL: 'https://swapi.dev/api'
});

async function obterPessoas(nome) {
   const response = await api.get('/people', {
      params: {
         search: nome 
      }
   });

   return response.data.results.map(mapearPessoas);
}

function mapearPessoas(item) {
   return {
      nome: item.name,
      altura: item.height
   }
}

module.exports = { obterPessoas }