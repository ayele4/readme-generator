const generateBadges = badgeArr => {
    badgeArr = badgeArr.map(itemBadge => {
        if(itemBadge !== 'None') {
            return `![License](https://img.shields.io/static/v1?label=License&message=` +itemBadge+ `&color=BLUE)`
        }
    })

    return badgeArr.join(' ')
}

const generateLicense = license => {
    license = license.map(itemLicense => '* ' + itemLicense)
    return license.join(' \n')
}

function generateMarkdown(data) {
    const {title, email, installation, usage, username, description, license} = data;
    return `
${generateBadges(license)}
# ${title}

## Description

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)
* [License](#license)
* [Contributing](#contributing)
* [Testes](#tests)

## Installation

${installation}

## Usage

${usage}

## License

${generateLicense(license)}


## Questions

Contact Information for questions: \n

GitHub: [${username}] (https://www.github.com/${username}) \n
E-mail: ${email}
`;
}

module.exports = generateMarkdown;