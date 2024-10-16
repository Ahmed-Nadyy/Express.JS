# Express.js Project

This project is a simple web server built using the [Express.js](https://expressjs.com/) framework for Node.js. It serves as a starting point for creating APIs, handling routing, middleware, and integrating with various databases and services.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
- [Middleware](#middleware)
- [Environment Variables](#environment-variables)
- [Error Handling](#error-handling)
- [License](#license)

---

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v12 or higher)
- [npm](https://www.npmjs.com/get-npm) (Node Package Manager) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/express-project.git
    cd express-project
    ```

2. **Install dependencies**:

    If you're using `npm`:
    ```bash
    npm install
    ```

    Or with `yarn`:
    ```bash
    yarn install
    ```

### Project Structure

The project follows a basic Express.js structure. Here's a breakdown of the key folders and files:

.
├── node_modules
├── src
│   ├── controllers
│   │   └── userController.js
│   ├── routes
│   │   └── userRoutes.js
│   ├── middlewares
│   │   └── authMiddleware.js
│   ├── app.js
│   ├── config.js
│   └── server.js
├── .env
├── package.json
└── README.md



- **`src/app.js`**: The main Express app configuration.
- **`src/server.js`**: The entry point for starting the server.
- **`src/routes/`**: Contains routing logic.
- **`src/controllers/`**: Handles request logic for different endpoints.
- **`src/middlewares/`**: Stores custom middleware, e.g., for authentication.
- **`.env`**: Environment variables configuration.

### Available Scripts

In the project directory, you can run the following commands:

- **`npm start`**: Runs the app in production mode.
- **`npm run dev`**: Runs the app in development mode with live reloading using `nodemon`.

### Running the App

1. Start the server in **development mode**:

    ```bash
    npm run dev
    ```

2. Start the server in **production mode**:

    ```bash
    npm start
    ```

The server will be running on `http://localhost:3000` by default.

## API Endpoints

Here is an overview of the API routes provided by the application.

| Method | Endpoint       | Description                |
|--------|----------------|----------------------------|
| GET    | `/api/users`    | Fetch all users            |
| POST   | `/api/users`    | Create a new user          |
| GET    | `/api/users/:id`| Fetch user by ID           |
| PUT    | `/api/users/:id`| Update user by ID          |
| DELETE | `/api/users/:id`| Delete user by ID          |

### Example Route

Here's an example of how a route is defined in Express:

```js
// src/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET all users
router.get('/users', userController.getAllUsers);

// POST create a new user
router.post('/users', userController.createUser);

// More routes...
module.exports = router;


## Controllers
Controllers are responsible for handling the logic related to each request.

```js
    // src/controllers/userController.js

    const getAllUsers = (req, res) => {
        res.status(200).json({ message: "Fetching all users" });
    };

    const createUser = (req, res) => {
        res.status(201).json({ message: "User created" });
    };

    module.exports = {
        getAllUsers,
        createUser,
    };
```


## Middleware
Middlewares in Express.js are functions that execute during the request-response cycle. They can modify requests and responses.

### Example Custom Middleware:
```js
// src/middlewares/authMiddleware.js

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (token === 'valid-token') {
        next(); // Continue to the next middleware or route handler
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};


module.exports = authMiddleware;
```
### To use the middleware in routes:
```js
const authMiddleware = require('./middlewares/authMiddleware');

app.use('/api/protected-route', authMiddleware);
```

## Environment Variables
The project uses environment variables to manage configuration. You can create a `.env` file at the root of your project with the following variables:

```bash
PORT=3000
NODE_ENV=development

## Error Handling
Express provides a simple mechanism for handling errors using middleware.

### Example Error Handling Middleware:
```js
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});```

## License
Ahmed Nady 
Gmail : dev.ahmed.nady@gmail.com