// Function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

## Table of contents
<details><summary><strong>Table of Contents</strong></summary>

- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage Examples](#usage-examples)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Testing](#testing)
- [Contact Me](#contact-me)
</details>

## Description
${data.description}

${data.additionalContext}

## Installation Instructions
${data.install}
 
## Usage Examples
${data.usage}

## Credits
${data.collaborators}

## License
${renderLicenseBadge(data.license)}

## Features  
${data.featuresList}

## Testing
${data.testingInstructions}

## Contact me
Please reach out with any questions regarding the application:
 - My email is ${data.emailAddress}
 - You can find me on Github via my username - ${data.gitHubName}, or just follow this link ${data.gitHubLink}
`;
}

// Licence array
const licenseArr = ['MIT', 'ISC', 'Apache 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License', 'Boost Software License', 'No License']

// Function that returns a license badge based on which license is passed in
// If there is no license, return - "No licence", otherwise return an empty string
const renderLicenseBadge = (License) => {
  console.log(License);
  switch (License) {
    case licenseArr[0]:
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case licenseArr[1]:
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case licenseArr[2]:
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case licenseArr[3]:
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    case licenseArr[4]:
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case licenseArr[5]:
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
    case licenseArr[6]:
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case licenseArr[7]:
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case licenseArr[8]:
      return 'No licence.'
    default:
      return '';
  }
}

module.exports = generateMarkdown;