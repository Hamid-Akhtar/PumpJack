# Getting Started with the project Server

1) cd src.

2) Run yarn install or just yarn to add the dependencies. 

3) Start the server with, node server.js
# Populate a test db to run this project
src/config/config.json is the db creds file

# Install Sequelize and Set The Enviroment

npm install --save sequelize
 npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2

# Install Sequelize and Set The Enviroment
npx sequelize-cli init
this command will create Migration , Models and Config File 


# Create Model of User and Products table with following Commands
1)  create Model by using Sequelize Commands than Migration will be Created Automatically
npx sequelize model:create --Users MyUser --attributes firstName:string,lastName:string,email:String,password:String
npx sequelize model:create --Products MyUser --attributes name:string,description:string,price:String,image:String,userId:Int

# Run Migration Command
npx sequelize-cli db:migrate

# Create Seed File For User Table and Add #2 Code in that file
1)  npx sequelize-cli seed:generate --name demo-user
2)
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

# Now Run this Command
npx sequelize-cli db:seed:all




# To set up Front End 

1) While being in root directory, change the directory to client cd client

2) yarn start will start up the localhost on port 3000.
