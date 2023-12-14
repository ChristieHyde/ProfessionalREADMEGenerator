# Professional README Generator
## Description
This project is an inline README generator. It can be used to provide simplistic yet professionally-formatted README pages for GitHub-hosted projects.

## Installation
An installation of Node.js is required to run the project.
Installation instructions are as follows:
- Download the project files.
- In the user's preferred command line application, run `npm install` or `npm i` inside the project folder.

## Usage
Demonstration video is provided at the following URL: https://watch.screencastify.com/v/U5DzUAFr4EB3rusp0Ahn
Users can run the project through Node on their preferred command line. The `node index.js` command will start the program.

Once the program is running, a series of questions will be displayed on the command line. Users can type their responses to these questions to have them saved into the program. The project title, description and the user's GitHub account and email address are mandatory questions and will show as null if unanswered; all other questions are optional.

Once all questions are answered, a README file will be generated inside the project folder. It will contain all of the prompt answers from the users, and will be professionally formatted, complete with a dynamic table of contents and a license badge.

## Credits
Code framework was provided by the University of Western Australia Coding Boot Camp course.
This project uses the Inquirer package (available through NPM at https://www.npmjs.com/package/inquirer/v/8.2.4).
Debug code (the Inquirer package test at line 80 of index.js) was sourced and adapted from the Inquirer package NPM page.
All other code was written by Christie Hyde for this project.