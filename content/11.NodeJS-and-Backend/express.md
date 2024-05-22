# Using Express

Express is a popular Node.js framework that simplifies the development of web applications and APIs by providing a robust set of features and tools. In this section, we'll cover the basics of setting up an Express application, defining routes, using middleware, and connecting to a database.

## Setting Up Express

First, let's set up a basic Express application. Ensure you have Node.js installed, then follow these steps:

### Step 1: Initialize a New Node.js Project

```bash [commands.sh] copy
mkdir my-express-app
cd my-express-app
npm init -y
```

### Step 2: Install Express
```bash [commands.sh] copy
npm install express
```

### Step 3: Create a Basic Server
Create a file named app.js and add the following code to set up a basic Express server.
```js [app.js] copy
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

## Defining Routes
Routes are used to define how an application responds to client requests for a specific endpoint. Let's define some basic routes.

### Basic Routing
```js [basic-routing.js] copy
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

### Route Parameters
Route parameters are named URL segments used to capture values at specific positions in the URL.
```js [route-params.js] copy
const express = require('express');
const app = express();
const port = 3000;

app.get('/users/:userId', (req, res) => {
  res.send(`User ID: ${req.params.userId}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

### Query Parameters
Query parameters are a way to pass additional data to the server via the URL.

```js [query-params.js] copy
const express = require('express');
const app = express();
const port = 3000;

app.get('/search', (req, res) => {
  res.send(`Search Query: ${req.query.q}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

## Middleware
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

### Using Middleware
```js [using-middleware.js] copy
const express = require('express');
const app = express();
const port = 3000;

// Custom middleware function
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

### Built-in Middleware
Express comes with a few built-in middleware functions that you can use.
```js [built-in-middleware.js] copy
const express = require('express');
const app = express();
const port = 3000;

// Built-in middleware to parse JSON bodies
app.use(express.json());

// Built-in middleware to serve static files
app.use(express.static('public'));

app.post('/data', (req, res) => {
  res.send(`Received JSON data: ${JSON.stringify(req.body)}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

## Connecting to a Database

### Using MongoDB with Mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
```js [mongodb.js] copy
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

// Defining a schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Creating a model
const User = mongoose.model('User', userSchema);

// Creating a new user
const newUser = new User({ name: 'John Doe', age: 30 });
newUser.save((err) => {
  if (err) return console.error(err);
  console.log('User saved successfully');
});
```


## Authentication and Authorization
### Implementing JWT Authentication
JSON Web Tokens (JWT) are an open, industry-standard RFC 7519 method for representing claims securely between two parties.

```js [authentication-authorization.js] copy
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.use(express.json());

const users = [{ id: 1, username: 'user', password: 'password' }];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ userId: user.id }, 'your_jwt_secret');
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1];
  if (token) {
    jwt.verify(token, 'your_jwt_secret', (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.get('/protected', authenticateJWT, (req, res) => {
  res.send('This is a protected route');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

<div class="note">
  <p><strong><em>NOTES:</em></strong></p>
  <ul>
    <li><strong><code>Express</code>:</strong> A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</li>
    <li><strong><code>Middleware</code>:</strong>Functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.</li>
    <li><strong><code>Mongoose</code>:</strong>An Object Data Modeling (ODM) library for MongoDB and Node.js.</li>   
  </ul>
</div>


## FAQ
<details>
  <summary><strong>Q: What is Express?</strong></summary>
  <p><strong>A:</strong> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
</details>
<details>
  <summary><strong>Q: How do I install Express?</strong></summary>
  <p><strong>A:</strong> You can install Express using NPM with the command <code>npm install express</code>.</p>
</details>
<details>
  <summary><strong>Q: What is middleware in Express?</strong></summary>
  <p><strong>A:</strong> Middleware functions are functions that have access to the request object (<code>req</code>), the response object (<code>res</code>), and the next middleware function in the application’s request-response cycle.</p>
</details>
<details>
  <summary><strong>Q: How do I connect to MongoDB using Mongoose?</strong></summary>
  <p><strong>A:</strong> You can connect to MongoDB using Mongoose by installing it with <code>npm install mongoose</code> and using the <code>mongoose.connect</code> method with your MongoDB connection string.</p>
</details>