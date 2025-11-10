<a id="readme-top"></a>

## About The Project

This project is a technical test for LuizaLabs - Netshoes.

The project contains both a back-end and front-end application, each one in their respective folder.

The project uses local json as it's main database/data storage

### Built With

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="32" height="32" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="32" height="32" />
  <img src="https://img.icons8.com/color/1200/express-js.jpg" alt="Express" width="32" height="32" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="32" height="32" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" width="32" height="32" />
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" width="32" height="32" />
          
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
3. Your project setup proccess is done :)

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


## Routes (Back-end)


### Wishlist

`:id` = User Id

#### Get Wishlist (Product Codes)
```
GET http://localhost:8080/wishlist/:id
```
Returns:  
`{ codes: [productCode1, productCode2, ...] }`


#### Get Full Wishlist (Product Details)
```
GET http://localhost:8080/wishlist/:id/full
```
Returns:  
`{ wishlist: [ProductObject, ...] }`


#### Add Product to Wishlist
```
POST http://localhost:8080/wishlist/:id/add
Body: { "productId": "PRODUCT_CODE" }
```
Returns updated wishlist:  
`{ wishlist: [ProductObject, ...] }`


#### Remove Product from Wishlist
```
DELETE http://localhost:8080/wishlist/:id/remove/:productId
```
Returns updated wishlist:  
`{ wishlist: [ProductObject, ...] }`


### Products

#### Get All Products or by Codes
```
GET http://localhost:8080/products
GET http://localhost:8080/products?codes=CODE1,CODE2
```

Returns matching products as an array.