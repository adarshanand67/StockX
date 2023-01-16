![logo (1)](https://user-images.githubusercontent.com/73928744/212635984-aae9a7eb-7887-4f7b-bbdb-4f98a04328c6.svg) <h1> StockX </h1>

## Tech Stack

### Backend -

Node.js: Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside of a web browser.

Express: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is used for handling routing and middleware in the application.

MongoDB: MongoDB is a cross-platform, document-oriented NoSQL database that stores data in a flexible, JSON-like format. It is used as the database for the project.

JWT (JSON Web Token): JWT is a compact and self-contained way for securely transmitting information between parties. It is used for authentication and authorization in the application.

Middleware Packages : Middleware packages like body-parser, cookie-parser, cors, dotenv, express-jwt, express-validator, fast-csv, jsonwebtoken, mongoose, morgan, nodemon etc are used to handle various functionalities like parsing the request body, handling cookies, handling cross-origin resource sharing, loading environment variables, validating user inputs, handling CSV files, creating and verifying JSON web tokens, connecting to MongoDB, handling HTTP request logging, and automatically restarting the server when code changes.

nodemon: Nodemon is a utility that automatically restarts the server when code changes are made.

fast-csv: A library used to handle CSV files.

dotenv: A zero-dependency module that loads environment variables from a .env file.

### Frontend -

- React.js: React.js is an open-source JavaScript library for building user interfaces. It is used for - building the UI of the project and managing the state of the application.

- Vite: Vite is a lightweight development server that serves the project in the browser and hot-reloads - changes as you edit files.

- Chakra UI: Chakra UI is a simple, modular, and accessible component library that gives you building blocks for your design system.

- Emotion: Emotion is a library for styling components using the css-in-js approach.

- Axios: Axios is a promise-based HTTP client for the browser and Node.js. It is used for making HTTP requests - to the backend API.

- Bootstrap: Bootstrap is an open-source CSS framework that provides a set of pre-designed UI components and responsive grid system.

- Chart.js: Chart.js is an open-source JavaScript library for creating charts. It is used for creating various - types of charts in the project.

- Highcharts: Highcharts is a JavaScript library used for creating interactive charts.

- React-router-dom: React-router-dom is a library used for client-side routing in React applications.

- React-icons : A library used to include svg icons

- PostCSS: PostCSS is a tool for transforming CSS with JavaScript. It is used in conjunction with Autoprefixer and Tailwind CSS to ensure browser compatibility

## Stock Market & Companies - Backend

Welcome to the backend portion of our Stock Market & Companies project. Our goal is to create a robust and reliable backend that powers the platform's real-time data on stock market indices (NSE & BSE) as well as information on various companies such as Reliance, Ashok Leyland, Cipla, Tata Steel, and Eicher Motors.

This package.json file contains all the necessary dependencies for the backend project. These dependencies include popular libraries and frameworks such as Express, Mongoose, and JWT, which are used for routing, connecting to a MongoDB database, and handling JSON web tokens, respectively.

To run this project in development mode, use the command `npm run dev`.
This will start the server using nodemon, which will automatically restart the server whenever changes are made to the code.

We also use several middleware packages like `body-parser`, `cookie-parser`, `cors`, `dotenv`, `express-jwt`, `express-validator`, `fast-csv`, `jsonwebtoken`, `mongoose`, `morgan`, `nodemon` etc to handle various functionalities like parsing the request body, handling cookies, handling cross-origin resource sharing, loading environment variables, validating user inputs, handling CSV files, creating and verifying JSON web tokens, connecting to `MongoDB`, handling HTTP request logging, and automatically restarting the server when code changes.

The project also uses `fast-csv` to handle CSV files, dotenv for loading environment variables and mongoose for connecting to MongoDB.

## API's

- Create an API for the stock market index (NSE & BSE)/(Nifty/Sensex)

- Create an API for the companies where a user can extract data of the respective companies (Reliance, Ashok
- Leyland, Cipla, Tata Steel, Eicher Motors)

- Create an API for user registration and login.

- The project also includes an API for user registration and login, as well as an API for the stock market
- index (NSE & BSE) and an API for the companies where users can extract data of the respective companies.

## Deployment

The backend code can be deployed on cloud platforms like AWS, Microsoft Azure, Google Cloud, Heroku or any other platform.

We hope you find this backend helpful in creating your own stock market and companies platform. Happy coding!

## Installation

- First, make sure you have Node.js and npm (Node Package Manager) installed on your system. You can check if you have them installed by running the command node -v and npm -v in your command line.

- Next, clone the repository or download the zip file of the project to your local system.

- Navigate to the root directory of the project in your command line and run the command npm install to install all the necessary dependencies listed in the package.json file.

- Once the installation is complete, you can run the command npm run dev to start the server in development mode.

- Make sure you have your MongoDB server running and set the connection string in your environment file.

- Once the server is running, you can test the API's by sending requests to the specified routes.

- Before deploying the code on any cloud platform make sure you have added the environment variables and your MongoDB connection string is changed accordingly.

- Then you can deploy the code on any cloud platform like AWS, Microsoft Azure, Google Cloud, Heroku or any other platform.

- And you are good to go, Happy Coding!

## API Reference

<!-- {
  "/": "docs",
  "/signup": "signup",
  "/signin": "signin",
  "/signout": "signout",
  "/users": "get all users",
  "/user/:userId": "get/update/delete user",
  "/stocks": "get/update all stocks",
  "/stocks/:stockTicker": "get stock of ticker"
} -->

- "/" : This endpoint returns the documentation for the API.

- "/signup" : This endpoint is used for user registration. It allows a user to create an account on the - platform.

- "/signin" : This endpoint is used for user login. It allows a user to sign in to the platform using their - registered credentials.

- "/signout" : This endpoint is used for user logout. It allows a user to sign out from the platform.

- "/users" : This endpoint is used to retrieve a list of all registered users on the platform.

- "/user/:userId" : This endpoint is used to retrieve, update, or delete a specific user on the platform.

- "/stocks" : This endpoint is used to retrieve a list of all stocks on the platform.

- "/stocks/:stockTicker" : This endpoint is used to retrieve a specific stock by its ticker symbol on the platform.


## License

- MIT

## Feedback

If you have any feedback, please reach out to us to @adarshanand67.
