![logo (1)](https://user-images.githubusercontent.com/73928744/212635984-aae9a7eb-7887-4f7b-bbdb-4f98a04328c6.svg)

<h1> StockX </h1>

[![GitHub contributors](https://img.shields.io/github/contributors/adarshanand67/Flipr)](https://github.com/adarshanand67/Flipr/contributors)
[![GitHub issues](https://img.shields.io/github/issues/adarshanand67/Flipr)](https://github.com/adarshanand67/Flipr/issues)
[![GitHub forks](https://img.shields.io/github/forks/adarshanand67/Flipr)](https://github.com/adarshanand67/Flipr/network)
[![GitHub stars](https://img.shields.io/github/stars/adarshanand67/Flipr)](https://github.com/adarshanand67/Flipr/stargazers)
[![GitHub license](https://img.shields.io/github/license/adarshanand67/Flipr)](https://github.com/adarshanand67/Flipr/blob/master/LICENSE)
<img src="https://img.shields.io/github/languages/top/adarshanand67/Flipr">
<img src="https://img.shields.io/github/watchers/adarshanand67/Flipr" />

## Storyline And Thought Process

As a financial enthusiast and software developer, I was determined to create a platform that would make it easy for people to access and understand the stock market. So, I decided to create StockX, a stock market website that would provide real-time stock data, market analysis, and educational resources for new investors.

But, as with any ambitious project, I faced many obstacles and hardships along the way. First and foremost, building StockX required an immense amount of research. I had to familiarize myself with various technologies that would be suitable for the project, such as Node.js for the backend, React.js for the frontend, and MongoDB as the database. I also had to navigate the complexities of stock market data and find a way to make it accessible to a wide range of users.

To bring my vision to life, I began by researching various technologies that would be suitable for the project. I decided to use Node.js as the backend language, Express as the web application framework, MongoDB as the database, and JWT (JSON Web Token) for authentication and authorization. I also used middleware packages such as body-parser, cookie-parser, cors, dotenv, express-jwt, express-validator, fast-csv, jsonwebtoken, mongoose, morgan, nodemon, and others to handle various functionalities in the application.

For the frontend, I chose to use React.js for building the UI and managing the state of the application. I also used Vite as the development server, Chakra UI as the component library, Emotion for styling, Axios for making HTTP requests, Bootstrap for the responsive grid system, and Chart.js for creating charts.

As the development of StockX progressed, I encountered other challenges such as bugs and compatibility issues. These problems had to be fixed, but it took a lot of time and effort to do so. There were moments when I felt like giving up but my vision for the project kept me going.

Despite the obstacles and hardships, I persisted and StockX was finally ready to be launched. The website was designed to be user-friendly and easy to navigate, with a clean and modern interface. Users could access real-time stock data, market analysis, and educational resources with just a few clicks.

It was a humbling experience to see how my vision had become a reality, and it was all worth it. I continue to work on StockX, adding new features and improving the user experience, and I am excited to see where this project will take me in the future.

## Screenshots

HomePage:
| ![HomePage](https://user-images.githubusercontent.com/79798301/212641749-a9a810aa-0c60-4d32-9884-b9c630feb0a4.png) |
| :----------------------------------------------------------------------------------------------------------------------------------: |

Company Data and Charts:
| ![Company_Data](https://user-images.githubusercontent.com/79798301/212642315-4a98426d-931b-4425-8284-1e2c63f63417.png) |
| :----------------------------------------------------------------------------------------------------------------------------------: |

Stock-Exchange Data:
| ![image](https://user-images.githubusercontent.com/79798301/212642658-80249476-e35c-4a65-bc17-e602a9122a84.png) |
| :----------------------------------------------------------------------------------------------------------------------------------: |

Technical Analysis:
| ![image](https://user-images.githubusercontent.com/79798301/212643177-63061d26-d898-46d0-9483-6ab0482fb9e1.png) |
| :----------------------------------------------------------------------------------------------------------------------------------: |

About Us:
| ![image](https://user-images.githubusercontent.com/79798301/212643758-e27b7b67-d4dc-4f42-b0e1-e1718696d13e.png) |
| :----------------------------------------------------------------------------------------------------------------------------------: |

MongoDB Data:
| ![image](https://user-images.githubusercontent.com/79798301/212653593-63d6f04e-8b99-4510-8566-64a1f9676505.png) |
| :----------------------------------------------------------------------------------------------------------------------------------: |

Postman Requests:
| ![image](https://user-images.githubusercontent.com/79798301/212653612-2b6c59b6-ad6f-4db6-96c8-c5790ce58d61.png) |
| :----------------------------------------------------------------------------------------------------------------------------------: |

## Tech Stack

### Backend -

`Node.js`: Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside of a web browser.

`Express`: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is used for handling routing and middleware in the application.

`MongoDB`: MongoDB is a cross-platform, document-oriented NoSQL database that stores data in a flexible, JSON-like format. It is used as the database for the project.

`JWT (JSON Web Token)`: JWT is a compact and self-contained way for securely transmitting information between parties. It is used for authentication and authorization in the application.

`Middleware Packages`: Middleware packages like body-parser, cookie-parser, cors, dotenv, express-jwt, express-validator, fast-csv, jsonwebtoken, mongoose, morgan, nodemon etc are used to handle various functionalities like parsing the request body, handling cookies, handling cross-origin resource sharing, loading environment variables, validating user inputs, handling CSV files, creating and verifying JSON web tokens, connecting to MongoDB, handling HTTP request logging, and automatically restarting the server when code changes.

`nodemon`: Nodemon is a utility that automatically restarts the server when code changes are made.

`fast-csv`: A library used to handle CSV files.

`dotenv`: A zero-dependency module that loads environment variables from a .env file.

### Frontend -

- `React.js`: React.js is an open-source JavaScript library for building user interfaces. It is used for - building the UI of the project and managing the state of the application.

- `Vite`: Vite is a lightweight development server that serves the project in the browser and hot-reloads changes as you edit files.

- `Chakra UI`: Chakra UI is a simple, modular, and accessible component library that gives you building blocks for your design system.

- `Axios`: Axios is a promise-based HTTP client for the browser and Node.js. It is used for making HTTP requests - to the backend API.

- `Chart.js`: Chart.js is an open-source JavaScript library for creating charts. It is used for creating various - types of charts in the project.

- `Highcharts`: Highcharts is a JavaScript library used for creating interactive charts.

- `React-router-dom`: React-router-dom is a library used for client-side routing in React applications.

- `React-icons`: A library used to include svg icons

- `PostCSS`: PostCSS is a tool for transforming CSS with JavaScript. It is used in conjunction with Autoprefixer and Tailwind CSS to ensure browser compatibility

## StockX - Backend

Welcome to the backend portion of our Stock Market & Companies project. Our goal is to create a robust and reliable backend that powers the platform's real-time data on stock market indices (NSE & BSE) as well as information on various companies such as Reliance, Ashok Leyland, Cipla, Tata Steel, and Eicher Motors.

This package.json file contains all the necessary dependencies for the backend project. These dependencies include popular libraries and frameworks such as Express, Mongoose, and JWT, which are used for routing, connecting to a MongoDB database, and handling JSON web tokens, respectively.

To run this project in development mode, use the command `npm run dev`.
This will start the server using nodemon, which will automatically restart the server whenever changes are made to the code.

We also use several middleware packages like `body-parser`, `cookie-parser`, `cors`, `dotenv`, `express-jwt`, `express-validator`, `fast-csv`, `jsonwebtoken`, `mongoose`, `morgan`, `nodemon` etc to handle various functionalities like parsing the request body, handling cookies, handling cross-origin resource sharing, loading environment variables, validating user inputs, handling CSV files, creating and verifying JSON web tokens, connecting to `MongoDB`, handling HTTP request logging, and automatically restarting the server when code changes.

The project also uses `fast-csv` to handle CSV files, dotenv for loading environment variables and mongoose for connecting to MongoDB.

## StockX - Frontend

As developer of StockX, I faced several challenges while creating the frontend of the project. The first and biggest challenge was creating a seamless user experience for our users. I had to ensure that the website was easy to navigate and provided all the necessary information in an organized and easy-to-digest format.

To overcome this challenge, I started by creating a well-structured project structure and organizing all the different components and pages in a logical and consistent manner. I also added a navigation bar at the top of the page for easy navigation between pages and a footer to the bottom of the page.

Next, I created several reusable components such as dropdown menus, modals, spinners, and text components. These components were used throughout the application to provide a consistent look and feel. I also created a component to handle the display of charts, which is used to display various data points on the website.

One of the main features of StockX is its ability to display data in the form of charts, so I had to ensure that the data was fetched and processed correctly. To do this, I made API calls to the backend using the Axios library. The data is then parsed and processed to extract the necessary information, such as the date labels, open prices, close prices, high prices, and low prices. This processed data is then used to create the Bar chart, which is rendered on the website for the users.

In addition to creating the user interface, I also created a technical analysis page that allows users to view various technical indicators such as Moving Averages, Relative Strength Index (RSI), and Bollinger Bands. This page uses the Highcharts and Chart.js library to create line charts that display the data in an easy-to-read format. This page also includes a dropdown menu that allows users to select the specific indicator they want to view.

I also created an "About Us" section, which provides information about the team behind the project. This section includes a brief description of each team member, as well as links to their social media profiles. This section also includes a link to the GitHub repository, which allows users to view the source code for the project.

Overall, creating the frontend of StockX was a challenging but rewarding experience. Despite the challenges, I am proud of the end result and am confident that the website will provide a valuable service to its users.

### Charts Used

In the project, StockX uses Bar charts to display various data points on the website.

- Open Price vs Date
- Close Price vs Date
- High Price vs Date
- Low Price vs Date
- Adj Close Price vs Date
- Volume vs Date
- Volatility vs Date
- Technical Analysis Indicators (MACD, RSI, Bollinger Bands, etc.)

All the charts are rendered on the website for the users to view and interact with, and it helps users to get a better understanding of the stock's performance over a given duration.

## API's

- Create an API for the stock market index (NSE & BSE)/(Nifty/Sensex)

- Create an API for the companies where a user can extract data of the respective companies (Reliance, Ashok Leyland, Cipla, Tata Steel, Eicher Motors)

- Create an API for user registration and login.

- The project also includes an API for user registration and login, as well as an API for the stock market
- index (NSE & BSE) and an API for the companies where users can extract data of the respective companies.

## Deployment

The backend code can be deployed on cloud platforms like AWS, Microsoft Azure, Google Cloud, Heroku or any other platform.

We hope you find this backend helpful in creating your own stock market and companies platform. Happy coding!

## Run Locally 🚀

Clone the project

```bash
  git clone https://github.com/adarshanand67/Flipr
```

Go to the frontend directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

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

- `/` : This endpoint returns the documentation for the API.

- `/signup` : This endpoint is used for user registration. It allows a user to create an account on the - platform.

- `/signin` : This endpoint is used for user login. It allows a user to sign in to the platform using their - registered credentials.

- `/signout` : This endpoint is used for user logout. It allows a user to sign out from the platform.

- `/users` : This endpoint is used to retrieve a list of all registered users on the platform.

- `/user/:userId` : This endpoint is used to retrieve, update, or delete a specific user on the platform.

- `/stocks` : This endpoint is used to retrieve a list of all stocks on the platform.

- `/stocks/:stockTicker` : This endpoint is used to retrieve a specific stock by its ticker symbol on the platform.


## Feedback 📝

If you have any feedback, please reach out to us at 📫 adarsh.anand.20031@iitgoa.ac.in.

## Contributing 🤝

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License 📜

[MIT](https://choosealicense.com/licenses/mit/)

## Authors 👨‍💻

| [<img src="https://github.com/AdarshAnand67.png?size=115" width=115><br><sub>@AdarshAnand67</sub>](https://github.com/AdarshAnand67) |
| :----------------------------------------------------------------------------------------------------------------------------------: |

| [<img src="https://github.com/AniketChaudhri.png?size=115" width=115><br><sub>@AniketChaudhri</sub>](https://github.com/AniketChaudhri) |
| :-------------------------------------------------------------------------------------------------------------------------------------: |

## Acknowledgements 🙏

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [React Docs](https://reactjs.org/docs/getting-started.html)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Node Docs](https://nodejs.org/en/docs/)
- [Express Docs](https://expressjs.com/en/4x/api.html)
- [Mongoose Docs](https://mongoosejs.com/docs/guide.html)
