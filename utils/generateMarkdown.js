function generateMarkdown(data) {
  let licenseBadge = "";
  let licenseLink = "";
  let licenseSection = "";
  if (data.license !== "None") {
    licenseBadge = `![License](https://img.shields.io/badge/license-${encodeURIComponent(data.license)}-blue.svg)`
    licenseLink = `- [License](#license)`;
    licenseSection = `## License 
This application is licensed under ${data.license} license.`;
  }
  return `
  # ${data.title}
  ${licenseBadge}
  
  ## Description 
  ${data.description}
  
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Screenshot](#screenshot)
  ${licenseLink}
  - [Test](#tests)
  - [Contributors](#contributors)
  - [Questions](#questions)
  - [Deployed Application](#deployed-application)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${licenseSection}

  ## Screenshot
  ${data.screenshot}
  
  ## Tests
  ${data.tests}
  
  ## Contributors
  ${data.contributors}
  
  ## Questions
  Please feel free to email me at: ${data.email}
  My GitHub: https://github.com/${data.github}
  
  ## Deployed Application
  This application was deployed at [${data.deploy}](${data.deploy})
  `;
}

module.exports = generateMarkdown;

