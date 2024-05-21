const http = require('http');
const fs = require('fs');

function messageGenerator(array, field = '') {
  if (!Array.isArray(array)) {
    throw new Error('array is empty.');
  }
  const message = 'Number of students:';
  if (!field) {
    return `${message} ${array.length}`;
  }
  const messageWithField = `Number of students in ${field}:`;
  const firstnameList = [];
  for (const line of array) {
    const student = line.split(',');
    if (student[3] === field) {
      firstnameList.push(student[0]);
    }
  }
  return `${messageWithField} ${firstnameList.length}. List: ${firstnameList.join(', ')}`;
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        console.log("INI, ERROR", path)
        return reject(new Error('Cannot load the database'));
      }
      const lines = data.trim().split('\n').slice(1);
      const filteredLines = lines.filter((line) => line.trim() !== '');
      const array = [];
      array.push(messageGenerator(filteredLines));
      array.push(messageGenerator(filteredLines, 'CS'));
      array.push(messageGenerator(filteredLines, 'SWE'));
      resolve(array);
    });
  });
}

const PORT = 1245;
const app = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.write('This is the list of our students\n');
      countStudents('database.csv')
        .then((data) => {
          data.forEach((student, index) => {
            const newLine = data.length === index + 1 ? '' : '\n';
            res.write(student + newLine);
          });
        })
        .catch((error) => {
          res.write(error.message);
        })
        .finally(() => {
          res.end();
        })
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      break;
  }
});

app.listen(PORT);
module.exports = app;
