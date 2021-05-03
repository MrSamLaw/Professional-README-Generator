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

  return license != "" ? `\n## License \nThis project is licensed under ![License: ${license}](${licBadge}) \nFor more information, please visit: ${licLink}` : "";

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = renderLicenseSection(data.license);

  return `# ${data.title}

## Description ![](${renderLicenseBadge(data.license)})
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
${data.contributing}

## Tests
${data.tests}

## Questions
Any questions can be submitted to via my GitHub page: [${data.questionsGithub}](http://github.com/${data.questionsGithub})
\nOr directly via email to: [${data.questionsName}](mailto:${data.questionsEmail})
`
}

module.exports = generateMarkdown;
