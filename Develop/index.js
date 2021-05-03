// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How does the user use the app?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license:',
        choices: [
            {
                key: 'Apache',
                name: 'Apache',
                value: 'apache',
            },
            {
                key: 'MIT',
                name: 'MIT',
                value: 'mit',
            },
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How does a user test this app?',
    },
    {
        type: 'input',
        name: 'questionsName',
        message: 'Please enter your full name for questions',
    },
    {
        type: 'input',
        name: 'questionsGithub',
        message: 'Please enter your GitHub username',
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'Please enter your email address',
    },
];

// , 'Boost', 'BSD', 'Eclipse', 'GNU', 'IBM', 'ISC', 'Mozilla', 'BY', 'ODbL', 'PDDL', 'Perl', 'Artistic', 'SIL', 'Unlicense', 'WTFPL', 'Zlib'
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(`Generating README.md with ${data.title}`);
        writeToFile('./output/README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
