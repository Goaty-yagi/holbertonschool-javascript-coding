# Learning Objectives

- [Why JavaScript programming is amazing](#Why-JavaScript-programming-is-amazing)
- [How to manipulate JSON data](#How-to-manipulate-JSON-data)
- [How to use request and fetch API](#How-to-use-request-and-fetch-API)
- [How to read and write a file using fs module](#How-to-read-and-write-a-file-using-fs-module)

## Why JavaScript programming is amazing
## How to manipulate JSON data
### 1, Parsing JSON
```javascript
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // Output: { name: 'John', age: 30 }
```
### 2, Accessing JSON Properties:
```javascript
console.log(jsonObject.name); // Output: John
console.log(jsonObject['age']); // Output: 30
```

### 3, Modifying JSON Properties:
```javascript
jsonObject.age = 31;
console.log(jsonObject); // Output: { name: 'John', age: 31 }
```

### Stringifying JSON:
```javascript
const updatedJsonString = JSON.stringify(jsonObject);
console.log(updatedJsonString); // Output: '{"name":"John","age":31}'

```
## How to use request and fetch API
### 1, npm install request
```bash
npm install request
```

### 2, Making a GET Request:
```javascript
const request = require('request');

request('https://api.example.com/data', function (error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log(body); // Print the response body
  }
});

// Fetch api
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse response body as JSON
  })
  .then(data => console.log(data))
  .catch(error => console.error('There was a problem with the fetch operation:', error));

```

### 3, Making a POST Request:
```javascript
const request = require('request');

request.post('https://api.example.com/data', { json: { key: 'value' } }, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log(body); // Print the response body
  }
});

// Fetch api

fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ key: 'value' }),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse response body as JSON
  })
  .then(data => console.log(data))
  .catch(error => console.error('There was a problem with the fetch operation:', error));

```

## How to read and write a file using fs module

### Reading a File:
```javascript
const fs = require('fs');

// Asynchronous Read
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});

// Synchronous Read (blocking)
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File contents:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
```

### Writing to a File:
```javascript
const fs = require('fs');

// Asynchronous Write
const contentToWrite = 'This is the content to write to the file.';
fs.writeFile('output.txt', contentToWrite, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File write operation complete.');
});

// Synchronous Write (blocking)
const contentToWriteSync = 'This is the content to write synchronously to the file.';
try {
  fs.writeFileSync('output-sync.txt', contentToWriteSync, 'utf8');
  console.log('File write operation complete (synchronous).');
} catch (err) {
  console.error('Error writing to file synchronously:', err);
}
```

### Appending to a File:
```javascript
const fs = require('fs');

// Asynchronous Append
const contentToAppend = '\nThis is additional content to append to the file.';
fs.appendFile('output.txt', contentToAppend, 'utf8', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('File append operation complete.');
});

// Synchronous Append (blocking)
const contentToAppendSync = '\nThis is additional content to append synchronously to the file.';
try {
  fs.appendFileSync('output-sync.txt', contentToAppendSync, 'utf8');
  console.log('File append operation complete (synchronous).');
} catch (err) {
  console.error('Error appending to file synchronously:', err);
}
```
