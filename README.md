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

- Author : RAKOTONAIVO Aina Raphaël

***********************************************************************************
				Transaction-app
***********************************************************************************

Postman collection available here : 
https://api.postman.com/collections/28189766-c606bec2-579c-4488-a42b-0f52b81943e5?access_key=PMAT-01H4NMV3P2VBXC2MWQ1J4DCEF2



Transaction-app is a microservice project based on the Nestjs framework,
whose architecture is made up of: a module, a controller and a service which 
is used to perform CRUD (Create Read Update Delete) operations. This is a 
a basic introduction to the Nestjs framework.

The bulk of the project is in the micro-service called: orders.
micro-service billing, which is an invoicing application that has to work
in a terminal is still under development.

DATABASE: 

To manipulate the data, the project uses MongoDB, which is a database. 
Document-oriented NoSQL. It is highly flexible and adapted to specific use cases 
of a company.

MongoDB uses several dependencies that must be installedfor the smooth running of the project.


CONFIGURATION :

Installation of outbuildings: 

In order for the transaction-app to function correctly, these operations must be carried out.

In your code editor where the project is open, open a terminal
and enter the following commands to install the necessary dependencies.

	- npm i mongoose
	- npm i @nestjs/mongoose
	- npm i @nestjs/config
	- npm i joi
	- npm i class-validator
	- npm i class-transformer
	- npm i @nestjs/microservices
	- npm i amqplib amqp-connection-manager


Container configuration

With the dependencies installed, you now need to configure the containers in Docker. 
Docker is a containerisation technology that makes it easier to manage dependencies within a container. 
of a project.
To launch the configuration, open a terminal in the project directory and run
the order: 

	- docker-compose up --build -V

This command launches the instructions contained in Dockerfile, which are used to create the 
images and configuring containers automatically. 


TEST:
To check that the microservices are working properly, we're going to run some tests with the 
Postman. 

Here's the link to the collection: https://api.postman.com/collections/28189766-c606bec2-579c-4488-a42b-0f52b81943e5?access_key=PMAT-01H4NMV3P2VBXC2MWQ1J4DCEF2



Post() method for creating an element:

To create an element, choose the POST method and enter the url:

	- http://localhost:3000/orders

In the body, choose the JSON format in raw. Then fill in the field as follows

```json
{
    "name": "Lebon Carim",
    "mail": "lebon.carim@gmail.com",
    "phoneNumber": "+23659854555685",
    "transferAmount": 1000

}
```


Get() method for reading elements in the database:

you need to choose the GET method and then enter the url: 

	- http://localhost:3000/orders

The information contained in the database will appear below.


PUT() method for updating an element in the database:

Same procedure as the POST method, just add the identifier of the element to be modified:
```json
{
        "_id": "64a6addf94df6dc8a1d1f63e",
        "name": "Killiam ",
        "mail": "karim@gmail.com",
        "phoneNumber": "+123456789",
        "transferAmount": 2000
}
```

DELETE() method for deleting an element from the database:

All you need to do is enter the identifier of the item to be deleted.
```json
{
    "_id": "64a6addf94df6dc8a1d1f63e"
}
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

