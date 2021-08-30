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
     {
         tyep: 'input',
         name: 'email',
         message: 'what is your email address?'
     },
     {
         tyep: 'input',
         name: 'title',
         message: 'what is your project name?'
     },
     {
       tyep: 'input',
       name: 'description',
       message: 'please write a short description of your project'
     },
     {
         tyep: 'list',
         name: 'license',
         message: 'what kind of license should your project have?',
         choices:['MIT','APACHE 2.0','GPL 3.0', 'None']
     },
    
]   

function startApplication() {
    inquirer.prompt(questions)
}

startApplication();