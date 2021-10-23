const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { resolve } = require('path');

const questions = [
    {
        tyep: 'input',
        name: 'name',
        message: 'what is your name?'
    },
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
        type: 'input',
        name: 'installation',
        message: 'how would you install this application?'
     },
     {
         type: 'input',
         name: 'book',
         message: 'what is your favorite book?'
     },
     {
        type: 'checkbox',
        name: 'license',
        message: 'what kind of license should your project have?',
        choices:['MIT','APACHE-2.0','GPL-3.0', 'None']
     },
    
]   

const writeToFile = pageMD => {
    return new Promise((resolve, reject)=> {
        fs.writeFile('./dist/README.md', pageMD, err => {
            if(err) {
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: 'README file created!'
            })
        })
    })
}

function startApplication() {
    inquirer.prompt(questions).then(data => {
        return generateMarkdown(data);
    })
    .then(pageMD => {
        return writeToFile(pageMD)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message)
    })
    .catch(err => {
        console.log(err);
    });
}

startApplication()
