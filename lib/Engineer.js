import { Employee } from "./Employee.js";
export class Engineer extends Employee {


    constructor(name, id, email, gitHub) {
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