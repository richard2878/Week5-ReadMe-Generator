// function to generate markdown for README
function generateMarkdown(response) {
  return `

# ${response.Title}
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Comments](#comments)
* [Tests](#tests)
  
## Description
${response.Description}
  
## Installation
${response.Installation}
  
## Usage
${response.Usage}
  
## License
${response.License}
  
## Credits
${response.Credits}

## Comments
${response.Comments}
  
## Tests
${response.Tests}

## Deployed
${response.Deployed}

## Repository
${response.Repository}

`;
}

module.exports = generateMarkdown;
