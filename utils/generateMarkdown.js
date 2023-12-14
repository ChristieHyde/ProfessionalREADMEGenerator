// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // Badges obtained from Shields.io
    switch(license) {
        case "Apache 2.0 License":
            return `https://img.shields.io/badge/License-Apache_2.0-blue.svg`;
        case "BSD 2-Clause License":
            return `https://img.shields.io/badge/License-BSD_2--Clause-orange.svg`;
        case "BSD 3-Clause License":
            return `https://img.shields.io/badge/License-BSD_3--Clause-orange.svg`;
        case "Eclipse Public License":
            return `https://img.shields.io/badge/License-EPL_1.0-red.svg`;
        case "MIT License":
            return `https://img.shields.io/badge/License-MIT-yellow.svg`;
        default:
            return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    // License links obtained from OpenSource.org
    switch(license) {
        case "Apache 2.0 License":
            return `https://opensource.org/licenses/Apache-2.0`;
        case "BSD 2-Clause License":
            return `https://opensource.org/licenses/BSD-2-Clause`;
        case "BSD 3-Clause License":
            return `https://opensource.org/licenses/BSD-3-Clause`;
        case "Eclipse Public License":
            return `https://opensource.org/licenses/EPL-1.0`;
        case "MIT License":
            return `https://opensource.org/licenses/MIT`;
        default:
            return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `![${license} license badge](${renderLicenseBadge(license)})
    This project is licensed under the ${license}.
    Please view license information and terms at ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

// LIST OF LICENSES:
/* mit yellow
    no licence;
*/