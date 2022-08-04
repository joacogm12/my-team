const Employee = require('./Employee')

class Engineer extends Employee {


    constructor(name, id, email, gitHub) {

        if (typeof gitHub !== "string" || gitHub.length === 0) {
            throw new Error("'github' param expected to be a non-empty string");
        }

        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
        return (this.gitHub);
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer