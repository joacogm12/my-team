import { Employee } from "./Employee.js";
export class Manager extends Employee {


    constructor(name, id, email, ofFiceNumber) {
        super(name, id, email);
        this.ofFiceNumber = ofFiceNumber;
    }

    getOfficeNumber() {
        return (this.ofFiceNumber);
    }

    getRole() {
        return "Manager"
    }
}
