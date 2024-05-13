#!/usr/bin/node
const request = require('request');

const args = process.argv;
let url;
if (args.length !== 3) {
  url = 'https://jsonplaceholder.typicode.com/todos';
} else {
  url = args[2];
}
request(url, function (error, response, body) {
  if (error) {
    console.log('error: ', error);
  }
  const tasks = JSON.parse(body);
  const obj = {};
  if (tasks.length) {
    const id = tasks[0].id;
    obj[id] = 0;
    for (const i of tasks) {
      if (!(i.userId in obj)) {
        obj[i.userId] = 0;
      }
      if (i.completed) {
        obj[i.userId] += 1;
      }
    }
  }
  console.log(obj);
});
