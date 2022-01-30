const inquirer = require('inquirer');
const fs = require('fs');






inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of the Employee?',
      name: 'empName',
    },
   ])
  .then((answers) => {
      const mdContent = makeMd(answers);
    fs.writeFile('README.md', mdContent, (err) =>
    err ? console.log(err) : console.log('Success!'));
  });

  const makeHtml= ({}) =>