# Steps to run project

A Vending Machine API made using Nodejs typescript framework Nestjs.

* You have to have mongodb up and running for database

1. Install dependencies
    ```bash
    yarn install
    ```
2) There is config folder in root directory where there are configuration related to application database and others. Be sure to change them according to your running environment.

3) Seed data for vending machine and its product:
    ```bash
    npx nestjs-command seed:vend
    npx nestjs-command seed:product
    ```
4) Now you can run you application. To run it in dev mode:
    ```bash
    yarn start:dev
    ```
5) To run your backend test in development mode:
    ```bash
    yarn test:watch
    ```
6) If everything goes well and you have set your backend default running port as 2222, you can visit your application through [http://localhost:2222](http://localhost:2222)

7) To view swagger documentation visit [http://localhost:7777/api](http://localhost:7777/api)
