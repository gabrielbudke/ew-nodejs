<div align="center">   
   <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-256.png" width="180px">   
   <img src="https://www.flaticon.com/svg/static/icons/svg/2091/2091625.svg" width="180px">
   <h1>Imersão em Desenvolvinento de API com Node.JS</h1>
</div>

<h3 align="center">
  Configurando o docker para o Postgres e MongoDB
</h3>

<p align="center" >    
  <img alt="Made by Gabriel B Sousa" src="https://img.shields.io/static/v1?label=made%20by&message=Gabriel%20Sousa&color=539E43&style=flat-square">  

  <img alt="Last commit" src="https://img.shields.io/github/last-commit/gabrielbudke/ew-nodejs?color=%23539E43&style=flat-square">  

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/gabrielbudke/ew-nodejs?color=539E43&style=flat-square">
</p>


## :gear: Configurando o Postgres no Docker

```
   docker run \
      --name postgres \
      -e POSTGRES_USER=gabrielsousa
      -e POSTGRES_PASSWORD=minhasenhasecreta
      -e POSTGRES_DB=heroes
      -p 5432:5432
      -d \
      postgres

```

### Configurando o Adminer como interface para o Postgres

```
   docker run \
      --name adminer \
      -p 8080:8080
      --link postgres:postgres \
      -d \
      adminer

```

## :gear: Configurando o MongoDB no Docker

```
   docker run \
      --name mongodb \
      -p 27017:27017
      -e MONGO_INITDB_ROOT_USERNAME=admin \
      -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
      -d \
      mongo:4

```

### Configurando um client para o MongoDB

```
   docker run \
      --name mongoclient \
      -p 3000:3000
      --link mongodb:mongodb \
      -d \
      mongoclient/mongoclient

```
