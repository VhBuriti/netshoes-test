<a id="readme-top"></a>

## About The Project

This project is a technical test for LuizaLabs - Netshoes.

The project contains both a back-end and front-end application, each one in their respective folder.

The project uses MongoDb as it's main database/data storage

> Alternatively, you can run the project locally, using local json files, you just need to change to the **no-db-host branch**

### Built With

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="32" height="32" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="32" height="32" />
  <img src="https://img.icons8.com/color/1200/express-js.jpg" alt="Express" width="32" height="32" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="32" height="32" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="32" height="32" />

</p>

## Getting Started

### Prerequisites

For this project, you will need npm for the back-end and yarn for the front-end

- npm

  ```sh
  npm install npm@latest -g
  ```

- yarn
  ```sh
  npm install --global yarn
  ```

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/VhBuriti/netshoes-test.git
   ```
2. Install dependencies for both back-end and front-end
   ```sh
    cd backend && npm install && cd ../frontend && yarn
   ```
3. Create a [mongodb account](https://www.mongodb.com/) (if you don't have one), create a new database, called data, where you will have two collections, one is called products, where you will pasted the data/products/mock-products.json (base products) and another collection called users, where you will paste the data/users/userExample.js.

    It should loook something like this

    <img src="https://i.ibb.co/xKcxnGFB/print-mongodb.png" alt="mongo db setup guide image"/>

4. With the mongodb connection URL, you need to add it inside a .env file, you may rename the .env-example to do so, where there already is an example of how you should add the value inside.

**_You may change the naming as you like, but beware you will need to adjust the backend accordingly._**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Running the project locally

To run the project locally, you will need two terminal instances, one inside the backend folder and another inside the frontend folder.

Inside the backend terminal:

   ```sh
    nodemon
   ```
   - or
   ```sh
    npm run start
   ```
   - or
   ```sh
    node index.js
   ```


Inside the frontend terminal:

   ```sh
    yarn start
   ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>
