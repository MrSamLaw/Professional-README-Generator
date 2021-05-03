// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'mit':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'mit':
      return 'https://opensource.org/licenses/MIT';
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licBadge = renderLicenseBadge(license);
  let licLink = renderLicenseLink(license);

  return license != "" ? `\n## License \n![License: ${license}](${licBadge}) \n ${licLink}` : "";

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = renderLicenseSection(data.license);

  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${license}

## Contributing
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.

## Tests
Go the extra mile and write tests for your application. 

## Questions
`;
}

module.exports = generateMarkdown;
