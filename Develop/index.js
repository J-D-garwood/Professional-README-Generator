//including packaged required
const inquirer = require('inquirer')
const fs = require('fs')
const generateLicense = require('./utils/generateLicense.js');

//Generate README.md function
const generateREADME = ({title, Description, Install, Use, License, Contribs, Tests, Qs1, Qs2}) =>
`# ${title}

## Description

${Description}

## Table of Contents

[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[License](#license)
[Tests](#tests)
[Questions](#questions)

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
For further questions, you can reach me at: 

${Qs1}
${Qs2}`;

// Prompting for user input
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
        },
        {
            type:'list',
            name:'License',
            message:'What license is this project under?',
            choices: ['Apache 2.0', 'Boost Software 1.0', 'BSD 3-Clause', 'BSD 2-Clause', 'Creative Commons', 'Eclipse', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'The Hippocratic License 2.1', 'The Hippocratic License 3.0', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'The zlib/libpng License'],
        },
        {
            type:'input',
            name:'Contribs',
            message:'Please enter a list of your collaborators',
        },
        {
            type:'input',
            name:'Tests',
            message:'Please enter some tests for your application:',
        },
        {
            type:'input',
            name:'Qs1',
            message:'Please enter your email address:',
        },
        {
            type:'input',
            name:'Qs2',
            message:'Please enter your GitHub username:',
        },
    ])
//creating README content with user inputs 
    .then((answers) => {
        const README_content = generateREADME(answers);
// Writing to README.md with generated content
        fs.writeFile('README.md', README_content, (error) =>
        error ? console.log(error) : console.log('Successfully created README.md!'))
    })
