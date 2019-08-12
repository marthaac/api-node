# ArticlesBack

This project is an API to provide the recently posted articles about Node.js on Hacker News.

This project was developed with Express which is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Endpoints:
- GET: articles/ : Provide the list of articles.
- DELETE: articles/:id : Delete an article by the id.


## Running Locally

- Install [NodeJs](https://nodejs.org/es/download/)
- Install [MongoDB Community Edition](https://docs.mongodb.com/manual/administration/install-community/) and run it by executing `mongod`
- Clone this repo
- Open a terminal in the root of the project 
- `npm install` to install all required dependencies
- `npm start` to start the local server

## Use Docker

You can also run this app as a Docker container:
- Clone this repo
- Install Docker
- Build and Run the Docker container locally:`docker-compose up --build`

## Code Overview

### Dependencies
  - [expressjs](https://expressjs.com/) - The server for handling and routing HTTP requests
  - [mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to javascript

### Application Structure
   - `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
   - `config.js` - This file contains a central location for configuration/environment variables.
   - `routes/` - This folder contains the route definitions for our API.
   - `models/` - This folder contains the schema definitions for our Mongoose models.
   - `services/` - This folder contains the service to perform the request to the external api and to save and get the data from the database as well.
   - `controllers/` - This folder contains the classes to perform the communication between the endpoints and the services.




