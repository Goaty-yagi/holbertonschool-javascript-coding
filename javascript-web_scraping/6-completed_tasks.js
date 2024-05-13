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
  if (tasks.length) {
    const obj = {};
    let taskSum = 0;
    let id = tasks[0].id;
    for (const i of tasks) {
      if (id !== i.userId) {
        if (taskSum) {
          obj[id] = taskSum;
          taskSum = 0;
        }
        id = i.userId;
      }
      if (i.completed) {
        taskSum += 1;
      }
    }
    if (taskSum) {
      obj[id] = taskSum;
    }
    console.log(obj);
  }
});
