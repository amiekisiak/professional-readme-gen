// External dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
console.log('README generator running');

// Inquirer prompts for userResponses
function generateReadme() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your project description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'If required, please describe installation process?',
      name: 'installation',

    },
    {
      type: 'input',
      message: 'If required, provide an example of your project in use ?',
      name: 'usage',

    },
    {
      type: 'input',
      message: 'Please add screenshot of the deployed application?',
      name: 'screenshot',
    },

    {
      type: 'input',
      message: 'Please provide examples of tests written for your application if any?',
      name: 'tests',

    },
    {
      type: 'list',
      message: "Please choose license for your project.",
      choices: ['GNU GPLv3', 'GNU LGPLv3', 'Eclipse Public License 2.0', 'Creative Commons Zero v1.0 Universal', 'Apache License 2.0', 'MIT License', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
      name: 'license'
    },
    {
      type: 'input',
      message: 'List of contributors',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Please enter your email:',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Please enter your GitHub user name:',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Please enter link to deployed application:',
      name: 'deploy',
    },
  ])
  .then((data) => {
    const markdown = generateMarkdown(data);
    fs.writeFile('README.md', markdown, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md generated!');
      }
    });
  });
}

module.exports = generateReadme;

generateReadme(); 
