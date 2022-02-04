const fs = require('fs');
const inquirer = require('inquirer');
const {enginePrompt, managePrompt, internPrompt, mainPrompt} = require('./lib/Prompts');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const makeHtml = require('./lib/makeHTML');
const empList = [];

const newManager = () => {
inquirer.prompt(managePrompt)
.then(answers => {
const member = new Manager(answers.role, answers.name, answers.id, answers.email, answers.officeNum)
empList.push(member)
main()
});
}

const newEngineer = () => {
  inquirer.prompt(enginePrompt)
  .then(answers => {
    const member = new Engineer(answers.role, answers.name, answers.id, answers.email, answers.gitHub)
    empList.push(member)
    main()
  });
}

const newIntern = () => {
  inquirer.prompt(internPrompt)
  .then(answers => {
    const member = new Intern(answers.role, answers.name, answers.id, answers.email, answers.school)
    empList.push(member)
    main()
  });
}
const createHtml = () => {
  console.log('Html Page Successfully Created!!');
    fs.writeFile('./ex_html/index.html', makeHtml(empList), (err) => {
            if (err) throw err;
        });
    

}


const main = () => {
  inquirer.prompt(
    mainPrompt

  ) .then(answers => {
    switch (answers.role) {
      case 'Manager': 
      newManager()
        break;
        case 'Engineer':
          newEngineer()
          break;
          case 'Intern':
            newIntern()
            break;
            case 'Create HTML Page':
              createHtml()
              default:
                console.log('Please Restart to Add more Employees')
                break;
    }
  })
}

main()