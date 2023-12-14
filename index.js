// Package declaration
var inquirer = require('inquirer');

const DEBUG = false;

// Questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the project title: "
    },
    {
        type: "input",
        name: "github_name",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email_address",
        message: "Please enter your email address: "
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of the project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter the project's installation instructions: "
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter an overview of the project's usage: "
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter the contribution guidelines for the project: "
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter the project's testing instructions: "
    },
    {
        // TODO get list of licences
        type: "list",
        name: "licence",
        message: "Please enter a description of the project: ",
        choices: ["Apache 2.0 License", "BSD 2-Clause License",
            "BSD 3-Clause License", "Eclipse Public License", "MIT License"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    // 
    inquirer.prompt(questions)
    .then(answers => {})
    .catch(error => {})
    
}

// Function call to initialize app
init();

// SAMPLE INQUIRER USAGE
// Source: npmjs.com/package/inquirer/v/8.2.4
if (DEBUG) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: "test",
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
}