// Package declaration
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        name: "install",
        message: "Please enter the project's installation instructions: "
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter an overview of the project's usage: "
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter the project's testing instructions: "
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter the contribution guidelines for the project: "
    },
    {
        type: "list",
        name: "license",
        message: "Please select the project's license: ",
        choices: ["No license", "Apache 2.0 License", "BSD 2-Clause License",
            "BSD 3-Clause License", "Eclipse Public License", "MIT License"]
    }
];

// Write the completed markdown to README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(`File successfully written to ${fileName}`)
    );
}

// Initialise app: get information from Inquirer, generate the markdown, write to file
function init() {
    // 
    inquirer.prompt(questions)
    .then(answers => {
        const markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown);
    })
    .catch(error => {
        console.log(error);
    })
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