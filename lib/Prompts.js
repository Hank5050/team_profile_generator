module.exports = {
  internPrompt: [
    {
      type: 'input',
      message: 'What is the name of the Intern?',
      name: 'name',
    },
    {
        type: 'input',
        message: 'What is the Intern ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Whats is the Intern Email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the Intern School Name?',
        name: 'school',
    },
   ],

   managePrompt: [
       {
           type: 'input',
           message: 'What is the Name of the Manager?',
           name: 'name',
       },
       {
           type: 'input',
           message: 'What is the Manager ID?',
           name: 'id',
       },
       {
           type: 'input',
           message: 'What is the Manager Email?',
           name: 'email',
       },
       {
           type:'input',
           message: 'What is the Manager Office Number?',
           name: 'officeNum'
       },
   ],
   enginePrompt: [
    {
      type: 'input',
      message: 'What is the name of the Engineer?',
      name: 'name',
    },
    {
        type: 'input',
        message: 'What is the Engineer ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Whats is the Engineer Email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the Engineer GitHub URL?',
        name: 'gitHub',
    },
   ],
   mainPrompt: [
       {
           type: 'list',
           message: 'What type of Employee Would you like to add?',
           name: 'role',
           choices: ['Engineer', 'Manager', 'Intern', 'Create HTML Page'],
           
       }
   ],

}