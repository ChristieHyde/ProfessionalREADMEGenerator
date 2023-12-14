// Returns the license's badge URL
// Returns empty string if no license
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

// Returns the license link URL
// Returns empty string if no license
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

// Returns a render of the page's license section
// Returns empty string if no license
function renderLicenseSection(license) {
    if (license === "No license") {
        return "";
    }
    return `![${license} license badge](${renderLicenseBadge(license)})
This project is licensed under the ${license}.
Please view license information and terms at ${renderLicenseLink(license)}`;
}

// Returns a render of the page's table of contents
function renderTableOfContents(data) {
    return `${data.install ? `- [Installation](#install)\n` : ``
}${data.usage ? `- [Usage](#usage)\n` : ``
}${data.tests ? `- [Testing](#tests)\n` : ``
}${data.contribution ? `- [Contributions](#contribution)\n` : ``
}${data.license !== "No license" ? `- [License](#license)\n` : ``
}- [Contacts](#contacts)
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
${renderTableOfContents(data)}
${data.install ? `<a id="install"></a>\n## Installation\n${data.install}\n\n` : ``
}${data.usage ? `<a id="usage">\n</a>## Usage\n${data.usage}\n\n` : ``
}${data.tests ? `<a id="tests">\n</a>## Testing\n${data.tests}\n\n` : ``
}${data.contribution ? `<a id="contribution">\n</a>## Contributions\n${data.contribution}\n\n` : ``
}${data.license !== "No license" ? `<a id="license">\n</a>## License\n${renderLicenseSection(data.license)}\n\n` : ``
}<a id="contact"></a>
## Contacts
The project owner can be contacted via the following:
- GitHub: github.com/${data.github_name}
- Email: ${data.email_address}
`;
}

module.exports = generateMarkdown;
