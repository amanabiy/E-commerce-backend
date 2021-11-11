# Shopper E-commerce


## Introduction
shopper is an e-commerce website where users will be able to filter, search and find the product they want and buy online. we have tried to make the searching easier for our users and allow them to buy products from the comfort of their home. 
- [Link to the deployed API / back-nd](https://ethio-shop.herokuapp.com/)
- [Link to the deployed Front-end](https://kalkidan999.github.io/Emarket/shop)
- [Linkt to the landing page](https://kalkidan999.github.io/Emarket/)

our website looks like this (note that we have used sample data on this image)
![alt text](https://github.com/amanabiy/shopper-backend/blob/main/shopping_png.png)

### Authors
- Amanuel Sisay [Linkedin](https://www.linkedin.com/in/amanuel-abiy-87b044201/)
- Kalkidan Demese [Linkedin](https://www.linkedin.com/in/amanuel-abiy-87b044201/)
- Yosef Kefale [Linkedin](https://www.linkedin.com/in/amanuel-abiy-87b044201/)

## Usage
our website can be used by anyone who is interested in. The shop managers will be able to post there products online for marketing and customers will be able to buy from the website.


## Environment

* __OS:__ Ubuntu 14.04 LTS
* __language:__ NodeJS
* __application server:__ express V4.17.1
* __database:__ mongodb , mongoose V6.0.11

## API ROUTES
| Routes            | Methods  |
| ----------------- | -------- |
| /api/users/       | GET/POST/PUT/DELET |
| /api/products/    | GET/POST |
| /api/carts/       | GET/POST/DELETE |
| /api/orders/      | GET/POST |

## Data Models
* For the product data model I have extracted the Product type and the product Brand from the product and created a new collection for them. The reason it's done like this is because, our website fetches the product type and the product brand every time it is run. Therefore, I didn't want to go through each product every time to return the product type and brand, rather I created a collection which contains the product type an product brand with their own unique ID, and return them when it was requested


# Installation

#### Development server

Run `npm run dev` for a dev server.

#### Build

Run `npm run start` to build the project. The build artifacts will be stored in the `dist/` directory.

# License 
MIT © 




