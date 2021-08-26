const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type:'input',
        name:'github',
        message: 'What is your GitHub username?'
    },
]

function startApplication() {
    inquirer.prompt(questions)
}

startApplication();