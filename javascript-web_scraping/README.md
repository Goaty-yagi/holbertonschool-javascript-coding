# JavaScript - Web scraping

"JavaScript - Web scraping" is a repository dedicated to showcasing JavaScript code and tools for web scraping tasks. From simple scraping scripts to more advanced scraping techniques using libraries like Puppeteer or Cheerio, this repository serves as a resource for developers interested in extracting data from websites programmatically using JavaScript.

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Practice Exercises](#practice-exercises)
- [Tests](#tests)

## Learning Objectives

This project is based on the learning objectives - see the [LEARNING_OBJECTIVES](https://github.com/Goaty-yagi/holbertonschool-javascript-coding/blob/main/javascript-web_scraping/LEARNING_OBJECTIVES.md) file for details.

## Requirements

- Allowed editors: vi, vim, emacs
- All your files will be interpreted on Ubuntu 14.04 LTS using node (version 10.14.x)
- All your files should end with a new line
- The first line of all your files should be exactly #!/usr/bin/node
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should be semistandard compliant. Rules of Standard + semicolons on top. Also as reference: AirBnB style
- All your files must be executable
- The length of your files will be tested using wc
- You are not allowed to use var

## Practice Exercises

### 0. Integers addition

**File:** [0-readme.js](https://github.com/Goaty-yagi/holbertonschool-javascript-coding/blob/main/javascript-web_scraping/0-readme.js)<br>
**Description:** Write a script that reads and prints the content of a file.<br>
**Requirement:** <br>

- The first argument is the file path
- The content of the file must be read in utf-8
- If an error occurred during the reading, print the error object


### 1. Write me

**File:** [1-writeme.js](https://github.com/Goaty-yagi/holbertonschool-javascript-coding/blob/main/javascript-web_scraping/1-writeme.js)<br>
**Description:** Write a script that writes a string to a file.<br>
**Requirement:** <br>

- The first argument is the file path
- The second argument is the string to write
- The content of the file must be written in utf-8
- If an error occurred during while writing, print the error object

### 2. Status code

**File:** [2-statuscode.js](https://github.com/Goaty-yagi/holbertonschool-javascript-coding/blob/main/javascript-web_scraping/2-statuscode.js)<br>
**Description:** Write a script that display the status code of a GET request.

<br>

**Requirement:** <br>

- The first argument is the URL to request (GET)
- The status code must be printed like this: code: <status code>
- You must use the module request

### 3. Star wars movie title

**File:** [3-starwars_title.js](https://github.com/Goaty-yagi/holbertonschool-javascript-coding/blob/main/javascript-web_scraping/3-starwars_title.js)<br>
**Description:** Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.
<br>

**Requirement:** <br>

- he first argument is the movie ID
- ou must use the Star wars API with the endpoint https://wapi-api.hbtn.io/api/films/:id
- ou must use the module request


### 4. Star wars Wedge Antilles

**File:** [4-starwars_count.js](https://github.com/Goaty-yagi/holbertonschool-javascript-coding/blob/main/javascript-web_scraping/4-starwars_count.js)<br>
**Description:** Write a script that prints the number of movies where the character “Wedge Antilles” is present.
<br>

**Requirement:** <br>

- The first argument is the API URL of the Star wars API: https://swapi-api.hbtn.io/api/films/
- Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
- You must use the module request


### 5. Loripsum

**File:** [5-request_store.js](https://github.com/Goaty-yagi/holbertonschool-javascript-coding/blob/main/javascript-web_scraping/5-request_store.js)<br>
**Description:** Write a script that gets the contents of a webpage and stores it in a file.
<br>

**Requirement:** <br>

- The first argument is the URL to request
- The second argument the file path to store the body response
- The file must be UTF-8 encoded
- You must use the module request


### 6. How many completed?

**File:** [6-completed_tasks.js](https://github.com/Goaty-yagi/holbertonschool-javascript-coding/blob/main/javascript-web_scraping/6-completed_tasks.js)<br>
**Description:** Write a script that computes the number of tasks completed by user id.
<br>

**Requirement:** <br>

- The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
- Only print users with completed task
- You must use the module request
