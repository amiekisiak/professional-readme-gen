// Function generating data to README file based on user's input
function generateMarkdown(data) {
    let licenseBadge = "";
    let licenseLink = "";
    let licenseSection = "";
      
    if (data.license !== "None") {
      licenseBadge = `![Badge](https://img.shields.io/badge/License-${data.license}-green.svg)`;
      licenseLink = `- [License](#license-)`;
      licenseSection = `## License
  This application is licensed under ${data.license} license.`;
    }
      
    return `
  # ${data.title}
  ${licenseBadge}
  ${data.name}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseLink}
  - [Test](#tests)
  - [Credits](#credits)
  - [Questions](#questions)
  - [Deployed Application](#deployed-application)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${licenseSection}
  ## Deployment
  This application was deployed at [${data.deployedLink}](${data.deployedLink})
  ## Tests
  ${data.tests}
  ## Contributors
  ${data.contributing}
  ## Questions
  Please feel free to email me at: ${data.email}
  My GitHub: [${data.github}](https://www.github.com/${data.github})
  `;
  }
  
  module.exports = generateMarkdown;
  