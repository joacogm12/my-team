const Employee = require('./Employee');

class Intern extends Employee {


    constructor(name, id, email, school) {

        if (typeof school !== "string" || school.length === 0) {
            throw new Error("'school' param expected to be a non-empty string");
        }

        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return (this.school);
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;