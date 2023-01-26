
const inquirer = require('inquirer');
const fs = require('fs');
const readmeTemplate = ({ title, description, table, usage, licensing, contribution, tests, questions, username, email, badge }) =>
  `
# ${title}
${badge}

# Description

${description}

# Table of Contents

${table}

# Installation

${description}

# Usage

${usage}

# License

${licensing}

# Contributing

${contribution}

# Tests

${tests}

# Questions

${questions}
[Link](https://github.com/${username})
[${email}](mailto:${email})
`;

inquirer.prompt([
  {
    type: 'name',
    message: 'What is the title of your project?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Type in the description of your project',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Type in the Table of Contents of your project',
    name: 'table'
  },
  {
    type: 'input',
    message: 'Type in the installation instructoins of your project',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Type in the usage section of your project',
    name: 'usage'
  },
  {
    type: 'list',
    message: 'Choose a licnese for your project',
    choices: ['GNU GPL v3', 'Apache License 2.0', 'Boost Software License 1.0', 'Mozilla Public License 2.0'],
    name: 'licensing'
  },
  {
    type: 'input',
    message: 'Type in the contribution section of your project',
    name: 'contribution'
  },
  {
    type: 'input',
    message: 'Type in the tests section of your project',
    name: 'tests'
  },
  {
    type: 'input',
    message: 'Type in the questions section of your project',
    name: 'questions'
  },
  {
    type: 'input',
    message: 'Type in your GitHub username',
    name: 'username'
  },
  {
    type: 'input',
    message: 'Type in your email address',
    name: 'email'
  }
])
  .then(function (answers) {

    if (answers.licensing === 'GNU GPL v3')
      answers.badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    else if (answers.licensing === 'Apache License 2.0')
      answers.badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    else if (answers.licensing === 'Boost Software License 1.0')
      answers.badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    else if (answers.licensing === 'Mozilla Public License 2.0')
      answers.badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    console.log(answers);
    writeToFile("README.md", readmeTemplate(answers))
  });

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log("Your README has been generated")
  });
}


