const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub
    }

    getRole() {
        return 'Engineer';
    }
}

const newEngineer = new Engineer("John", 1, "John@email.com", "https://github.com/repo/John010");

newEngineer.getName();

module.exports = Engineer;