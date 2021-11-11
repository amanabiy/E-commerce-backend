# A back end for shoper website
A full end-point API for the webiste

## Environment

* __OS:__ Ubuntu 14.04 LTS
* __language:__ NodeJS
* __frontend:__ Angular
* __application server:__ express V4.17.1
* __database:__ mongodb , mongoose V6.0.11

## API ROUTES
| Routes            | Methods  |
| ----------------- | -------- |
| /api/users/       | GET/POST |
| /api/products/    | GET/POST |
| /api/carts/       | GET/POST |
| /api/orders/      | GET/POST |

# Data Models
- For the product data model I have extracted the Product type and the product Brand from the product and created a new collection for them. The reason it's done like this is because, our website fetches the product type and the product brand every time it is run. Therefore, I didn't want to go through each product every time to return the product type and brand, rather I created a collection which contains the product type an product brand with their own unique ID, and return them when it was requested
# Setup

## Development server

Run `npm run dev` for a dev server.

## Build

Run `npm run start` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
