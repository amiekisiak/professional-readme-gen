const inquirer = require('inquirer');
const fs = require('fs');

console.log('README generator running');

// Internal modules
const generateMarkdown = require('./utils/generateMarkdown');

// Inquirer prompts for userResponses
function generateReadme() {
  inquirer.prompt([
    // ...inquirer questions here...
  ])
    .then((responses) => {
      const markdown = generateMarkdown(responses);
      fs.writeFile('README.md', markdown, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('README.md generated!');
          process.exit(); // Wait for file to be written before exiting
        }
      });
    });
}

generateReadme(); // Call the function to generate the README file
