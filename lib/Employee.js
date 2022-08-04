class Employee {
    constructor(name, id, email) {

        if (typeof name !== "string" || name.length === 0) {
            throw new Error("'name' param expected to be a non-empty string");
        }

        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("'id' param expected to be a positive number");
        }

        if (typeof email !== "string" || /\S+@\S+\.\S+/.test(email) == false || email.length == 0) {
            throw new Error("'email' param expected to be a string with '@' '.' and no spaces ");
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee