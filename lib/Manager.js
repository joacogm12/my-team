const Employee = require('./Employee');

class Manager extends Employee {


    constructor(name, id, email, officeNumber) {

        if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
            throw new Error("'officeNumber' param expected to be a number greater than 0");
        }

        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return (this.officeNumber);
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager