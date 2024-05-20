# NodeJS Basics
"NodeJS Basics" is a repository dedicated to introducing fundamental concepts and practical applications of Node.js.

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Practice Exercises](#practice-exercises)

## Learning Objectives

This project is based on the learning objectives - see the [LEARNING_OBJECTIVES](https://github.com/Goaty-yagi/holbertonschool-javascript-coding/blob/main/Node_JS_basic/LEARNING_OBJECTIVES.md) file for details.

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
- All of your functions/classes must be exported by using this format: module.exports = myFunction;


## Practice Exercises

### 0. Executing basic javascript with Node JS

**File:** [0-console.js](https://github.com/Goaty-yagi/holbertonschool-javascript-coding/blob/main/Node_JS_basic/0-console.js)<br>
**Description:** In the file 0-console.js, create a function named displayMessage that prints in STDOUT the string argument.
**Requirement:** <br>


### 1. Using Process stdin

**File:** [1-stdin.js](https://github.com/Goaty-yagi/holbertonschool-javascript-coding/blob/main/Node_JS_basic/1-stdin.js)<br>
**Description:** Create a program named 1-stdin.js that will be executed through command line:
**Requirement:** <br>

- It should display the message Welcome to Holberton School, what is your name? (followed by a new line)
- The user should be able to input their name on a new line
- The program should display Your name is: INPUT
- When the user ends the program, it should display This important software is now closing (followed by a new line)

- Your code will be tested through a child process, make sure you have everything you need for that


### 2. Reading a file synchronously with Node JS

**File:** [2-read_file.js](https://github.com/Goaty-yagi/holbertonschool-javascript-coding/blob/main/Node_JS_basic/2-read_file.js)<br>
**Description:** Using the database database.csv (provided in project description), create a function countStudents in the file 2-read_file.js
**Requirement:** <br>

- Create a function named countStudents. It should accept a path in argument
- The script should attempt to read the database file synchronously
- If the database is not available, it should throw an error with the text Cannot load the database
- If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
- It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
- CSV file can contain empty lines (at the end) - and they are not a valid student!


### 3. Reading a file asynchronously with Node JS

**File:** [3-read_file_async.js](https://github.com/Goaty-yagi/holbertonschool-javascript-coding/blob/main/Node_JS_basic/3-read_file_async.js)<br>
**Description:** Using the database database.csv (provided in project description), create a function countStudents in the file 3-read_file_async.js<br>
**Requirement:** <br>

- Create a function named countStudents. It should accept a path in argument (same as in 2-read_file.js)
- The script should attempt to read the database file asynchronously
- The function should return a Promise
- If the database is not available, it should throw an error with the text Cannot load the database
- If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
- It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
- CSV file can contain empty lines (at the end) - and they are not a valid student!


### 4. Create a small HTTP server using Node's HTTP module

**File:** [4-http.js](https://github.com/Goaty-yagi/holbertonschool-javascript-coding/blob/main/Node_JS_basic/4-http.js)<br>
**Description:** In a file named 4-http.js, create a small HTTP server using the http module:<br>
**Requirement:** <br>
- It should be assigned to the variable app and this one must be exported
- HTTP server should listen on port 1245
- Displays Hello Holberton School! in the page body for any endpoint as plain text

In terminal 1:
```bash
bob@dylan:~$ node 4-http.js
...
```

In terminal 2:
```bash
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
Hello Holberton School!
bob@dylan:~$ 
```

### 5. Create a more complex HTTP server using Node's HTTP module

**File:** [5-http.js](https://github.com/Goaty-yagi/holbertonschool-javascript-coding/blob/main/Node_JS_basic/5-http.js)<br>
**Description:** In a file named 5-http.js, create a small HTTP server using the http module:<br>
**Requirement:** <br>
- It should be assigned to the variable app and this one must be exported
- HTTP server should listen on port 1245
- It should return plain text
- When the URL path is /, it should display Hello Holberton School! in the page body
- When the URL path is /students, it should display This is the list of our students followed by the same content as the file 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file
- CSV file can contain empty lines (at the end) - and they are not a valid student!

In terminal 1:
```bash
bob@dylan:~$ node 5-http.js
...
```

In terminal 2:
```bash
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
```