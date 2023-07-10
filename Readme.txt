***********************************************************************************
				Transaction-app
***********************************************************************************


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

{
    "name": "Lebon Carim",
    "mail": "lebon.carim@gmail.com",
    "phoneNumber": "+23659854555685",
    "transferAmount: 1000

}


Get() method for reading elements in the database:

you need to choose the GET method and then enter the url: 
	- http://localhost:3000/orders

The information contained in the database will appear below.


PUT() method for updating an element in the database:

Same procedure as the POST method, just add the identifier of the element to be modified
{
        "_id": "64a6addf94df6dc8a1d1f63e",
        "name": "Killiam ",
        "mail": "karim@gmail.com",
        "phoneNumber": "+123456789",
        "transferAmount: 2000
}


DELETE() method for deleting an element from the database:

All you need to do is enter the identifier of the item to be deleted.

{
    "_id": "64a6addf94df6dc8a1d1f63e"
}

