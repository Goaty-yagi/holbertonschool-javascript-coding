# Learning Objectives

- [run javascript using NodeJS](#run-javascript-using-NodeJS)
- [use NodeJS modules](#use-NodeJS-modules)
- [use specific Node JS module to read files](#use-specific-Node-JS-module-to-read-files)
- [use process to access command line arguments and the environment](#use-process-to-access-command-line-arguments-and-the-environment)
- [create a small HTTP server using Node JS](#create-a-small-HTTP-server-using-Node-JS)
- [create a small HTTP server using Express JS](#create-a-small-HTTP-server-using-Express-JS)
- [create advanced routes with Express JS](#create-advanced-routes-with-Express-JS)
- [use ES6 with Node JS with Babel-node](#use-ES6-with-Node-JS-with-Babel-node)
- [use Nodemon to develop faster](#use-Nodemon-to-develop-faster)


## run javascript using NodeJS
```bash
node script.js

```
## use NodeJS modules
```javascript
const fs = require('fs');
```
## use specific Node JS module to read files

```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

```
## use process to access command line arguments and the environment
### Access Command Line Arguments:
```javascript
console.log(process.argv); // Print all command-line arguments
const args = process.argv.slice(2); // Exclude first two arguments
console.log(args); // Print only additional command-line arguments

```
### Access Environment Variables:
```javascript
console.log(process.env.NODE_ENV); // Access a specific environment variable
console.log(process.env); // Print all environment variables

```

## create a small HTTP server using Node JS
```javascript
// Import the 'http' module
const http = require('http');

// Define the port number
const PORT = 3000;

// Create a HTTP server
const server = http.createServer((req, res) => {
  // Set the response status and headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response body
  res.write('Hello, World!\n');

  // End the response
  res.end();
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

```
## create a small HTTP server using Express JS
```bash
npm install express

```

```javascript
// Import the Express.js module
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define the port number
const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

```
## create advanced routes with Express JS
```javascript
const express = require('express');
const app = express();

// Middleware function to log request details
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Call the next middleware function
};

// Middleware function to validate user authentication
const authenticateUser = (req, res, next) => {
  if (req.query.auth === 'true') {
    next(); // User is authenticated, proceed to the next middleware or route handler
  } else {
    res.status(401).send('Unauthorized');
  }
};

// Route with route parameter
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Route with middleware functions
app.get('/admin', authenticateUser, (req, res) => {
  res.send('Admin Dashboard');
});

// Route chaining with multiple HTTP methods
app.route('/products')
  .get((req, res) => {
    res.send('List of Products');
  })
  .post((req, res) => {
    res.send('Add a Product');
  });

// Route with query parameters
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search query: ${query}`);
});

// Apply the logRequest middleware to all routes
app.use(logRequest);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

```
## use ES6 with Node JS with Babel-node
```bash
npm install @babel/core @babel/node @babel/preset-env --save-dev
```
### Create a .babelrc file in the root directory of your project:
```bash
{
  "presets": ["@babel/preset-env"]
}

```
### Modify your package.json file to include a script for running your code with Babel:
```json
{
  "scripts": {
    "start": "babel-node your_script.js"
  }
}

```

```bash
npm start
```

## use Nodemon to develop faster
Nodemon is a useful tool for automatically restarting your Node.js application when file changes are detected, making the development process faster and more efficient. Here's how you can use Nodemon:

### 1. Install Nodemon globally:

```bash
npm install -g nodemon

```

### 2. Navigate to your Node.js project directory.

### 3. Run your Node.js application using Nodemon:

```bash
nodemon your_script.js

```

### 4. Now, whenever you make changes to your code and save the files, Nodemon will automatically restart your Node.js application, reflecting the changes immediately.

### 5. You can also customize Nodemon behavior by adding a nodemon.json or nodemon.config.js file in your project directory. This file allows you to configure options such as file watching patterns, ignored files, and other settings.

```json
{
  "verbose": true,
  "ignore": ["node_modules"],
  "watch": ["src"],
  "exec": "babel-node src/index.js",
  "ext": "js json"
}
```

- "verbose": true: This indicates that you want verbose output from the tool, meaning it will provide more detailed information while running.
- "ignore": ["node_modules"]: This specifies that the tool should ignore changes in the node_modules directory, which typically contains installed dependencies.
- "watch": ["src"]: This tells the tool to watch for changes in the src directory. When any file in this directory changes, the tool will restart the application.
- "exec": "babel-node src/index.js": This defines the command to execute when changes are detected. In this case, it's using babel-node to run the index.js file in the src directory. This suggests that you're using Babel for transpiling JavaScript code.
- "ext": "js json": This specifies the file extensions to watch for changes. In this case, it's monitoring changes in files with .js and .json extensions.
