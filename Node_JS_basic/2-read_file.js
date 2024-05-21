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
  try {
    const file = fs.readFileSync(path, 'utf8').trim();
    const lines = file.split('\n').slice(1);
    console.log(messageGenerator(lines));
    console.log(messageGenerator(lines, 'CS'));
    console.log(messageGenerator(lines, 'SWE'));
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
