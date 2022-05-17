# Desafio DevApi - Back-end com NodeJS

<p align="center">
  <a href="https://github.com/nestjs/nest" target="blank">Nest</a> (NestJS) is a framework for building efficient, scalable Node.js server-side applications.
</p>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Descrição
 <p align="center"> Tecnologias usada para o banco de dados: MongoDB (NoSQL) - conexão via cluster Atlas</p>


## Dados dos users:
  ```bash
  name: string
  email: string
  password: string
  deleted_at: Date | null
```

## Dados dos conectors:
  ```bash
  name: string
  type: string
  privacity: string
  base_url: string
  logo_url: string
  category: string
  description: string
  status: string
  deleted_at: Date | null
```


## Instalação das dependências:

```bash
$ npm i
 ou
$ yarn
```

## População dos users:

```bash
$ npx nestjs-command create:user
 ou
$ yarn nestjs-command create:user
```

## População dos conectors:

```bash
$ npx nestjs-command create:conector
 ou
$ yarn nestjs-command create:conector
```

## Iniciar a aplicação:

```bash
$ npm start
ou
$ yarn start

*obs: Necessário adicionar o endereço de IP da sua máquina no Cluster do banco de dados.
```

## Iniciar a aplicação via Docker:

```bash
$ docker-compose up

*obs: Necessário adicionar o endereço de IP da máquiva virtual (Docker) no Cluster do banco de dados.
```

## Usuário para a autenticação:
```bash
  email: user@devapi.com
  password: 123

*obs: Após o token obtido através da rota de login, enviar por authorization com o tipo Bearer Token, para assim a realização de quaisquer outras requisições.
```

