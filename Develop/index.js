// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const generateREADME = ({title, Description, Install, Use, License, Contribs, Tests, Qs1, Qs2}) =>
`#${title}

## Description

${Description}

## Table of Contents

<INSERT TABLE OF CONTENTS HERE>

## Installation

${Install}

## Usage

${Use}

## Credits

${Contribs}

## License

${License}

## Tests

${Tests}

## Questions

${Qs1}
${Qs2}`;

inquirer
    .prompt([
        {
            type:'input',
            name:'title',
            message:'What is the title of your project?',
        },
        {
            type:'input',
            name:'Description',
            message:'Please enter a description of your project:',
        },
        {
            type:'input',
            name:'Install',
            message:'Please enter the installation instructions for your project:',
        },
        {
            type:'input',
            name:'Use',
            message:'Please enter the usage instructions for your project:',
        },/*
        {
            type:'',
            name:'License',
            message:'',
        },*/
        {
            type:'input',
            name:'Contribs',
            message:'Please enter a list of your collaborators',
        },
        {
            type:'input',
            name:'Tests',
            message:'Please enter some tests for your application: ',
        },
        {
            type:'input',
            name:'Qs1',
            message:'Please enter your email address: ',
        },
        {
            type:'input',
            name:'Qs2',
            message:'Please enter your GitHub username: ',
        },
    ])
    .then((answers) => {
        const README_content = generateREADME(answers);

        fs.writeFile('README.md', README_content, (error) =>
        error ? console.log(error) : console.log('Successfully created README.md!')
)
    })

/*
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile("README.md", README_content) {
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
*/