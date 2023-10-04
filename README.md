<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


npm i -g @nestjs/cli

nest new nest-orm-api

cd nest-orm-api/

npm run start

http://localhost:3000/

https://medium.com/@gausmann.simon/nestjs-typeorm-and-postgresql-full-example-development-and-project-setup-working-with-database-c1a2b1b11b8f

npm install --save typeorm mysql2

npm install --save @nestjs/typeorm typeorm pg

npm install --save dotenv

npm i --save-dev nodemon ts-node

npm run start:dev


npm run start:debug


-- apl_nestjs.vw_escola source

CREATE OR REPLACE VIEW apl_nestjs.vw_escola
AS SELECT e.id_entidade,
    e.nr_cod_inep,
    e.ds_nome,
    e.ds_cep,
    e.ds_logradouro,
    e.ds_numero,
    e.ds_complemento,
    e.ds_bairro,
    e.ds_ddd,
    e.ds_fone,
    e.ds_fone2,
    e.ds_email,
    e.ds_latitude,
    e.ds_longitude,
    sf.id_situacao_funcionamento AS "situacaoFuncionamentoId",
    sf.ds_nome AS "situacaoFuncionamentoNome"
   FROM apl_nestjs.tb_entidade e
     JOIN apl_nestjs.tb_situacao_funcionamento sf ON e.id_situacao_funcionamento = sf.id_situacao_funcionamento
  WHERE e.id_grupo_entidade = 4;


  -- apl_nestjs.tb_entidade_ano_letivo definition

-- Drop table

-- DROP TABLE apl_nestjs.tb_entidade_ano_letivo;

CREATE TABLE apl_nestjs.tb_entidade_ano_letivo (
	id_entidade int8 NOT NULL,
	id_ano_letivo int8 NOT NULL,
	CONSTRAINT fk_tb_ent_ano_let_ano_let FOREIGN KEY (id_ano_letivo) REFERENCES apl_nestjs.tb_ano_letivo(id_ano_letivo),
	CONSTRAINT fk_tb_ent_ano_let_ent FOREIGN KEY (id_entidade) REFERENCES apl_nestjs.tb_entidade(id_entidade)
);


import { Transform } from 'class-transformer';


@Transform(() => UserDTO)
  toDTO(): UserDTO {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    };
  }