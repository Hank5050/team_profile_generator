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
    fs.writeFile('index.html', mdContent, (err) =>
    err ? console.log(err) : console.log('Success!'));
  });

  const makeHtml= ({name, id, email, gitHub, officeNum, school}) =>