// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const generateREADME = ({title, Description, Install, Use, License, Contribs, Tests, Qs}) =>
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

## Tests

${Tests}

## Questions

${Qs}`


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