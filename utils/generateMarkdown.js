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
    const {title, email, github, description, license} = data;
    return `
${generateBadges(license)}
# ${title}

## Description

${description}

## Table of Contents

* [Installation](#installation)
* [Questions](#questions)
* [License](#license)

## License
${generateLicense(license)}

## Questions
${email} ${github}
`
}

module.exports = generateMarkdown;