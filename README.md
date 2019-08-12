# ArticlesBack

This project is an api to provide the recently posted articles about Node.js on Hacker News.

This project was developed with Express which is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0


## Getting started

    - Clone this repo
    - `npm install` to install all required dependencies
    - Install MongoDB Community Edition and run it by executing `mongod`
    - `npm run dev` to start the local server

## Code Overview

### Dependencies
   [expressjs](https://expressjs.com/) - The server for handling and routing HTTP requests
   [mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to javascript

### Application Structure
   - `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
   - `config.js` - This file contains a central location for configuration/environment variables.
   - `routes/` - This folder contains the route definitions for our API.
   - `models/` - This folder contains the schema definitions for our Mongoose models.
   - `services/` - This folder contains the service to perform the request to the external api and to save and get the data from the database as well.
   - `controllers/` - This folder contains the classes to perform the communication between the endpoints and the services.

### Configure app

Open `src/config.js` then edit it with your settings. You will need:

- Batabase name (config.db);


