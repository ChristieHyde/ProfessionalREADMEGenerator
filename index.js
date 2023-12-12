// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// SAMPLE INQUIRER USAGE
// Source: npmjs.com/package/inquirer/v/8.2.4
var inquirer = require('inquirer');
inquirer
  .prompt([
    {
        message: "type test message",
    }
  ])
  .then((answers) => {
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("tty error");
    } else {
      console.log("error");
    }
  });