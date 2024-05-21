const express = require('express');
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
        reject(new Error('Cannot load the database'));
        return;
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

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let text = 'This is the list of our students\n';
  if (process.argv.length >= 2) {
    countStudents(process.argv[2])
      .then((data) => {
        data.forEach((student, index) => {
          const newLine = data.length === index + 1 ? '' : '\n';
          text += student + newLine;
        });
        res.send(text);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});
const PORT = 1245;

app.listen(PORT);
module.exports = app;
