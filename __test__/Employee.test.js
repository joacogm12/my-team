const Employee = require('../lib/Employee')

describe('Employee class', () => {
    describe('create object', () => {
        it('Create an object', () => {
            const employee = new Employee("joaquin", 1, "joaquin@fakemail.com");

            expect(employee.name).toBe("joaquin");
            expect(employee.id).toBe(1);
            expect(employee.email).toBe("joaquin@fakemail.com");
        });

        it('sould throw an error if nothing is provided', () => {
            const cb = () => new Employee()

            expect(cb).toThrow()
        })

        it('sould throw an error if name is not provided', () => {
            const cb = () => new Employee("", 1, "joaquin@fakemail.com")

            expect(cb).toThrow(new Error("'name' param expected to be a non-empty string"))
        })

        it('sould throw an error if ID is a number smaller than 0', () => {
            const cb = () => new Employee("joaquin", -1, "joaquin@fakemail.com")

            expect(cb).toThrow(new Error("'id' param expected to be a positive number"))
        })

        it('sould throw an error if ID is not a number', () => {
            const cb = () => new Employee("joaquin", 'uno', "joaquin@fakemail.com")

            expect(cb).toThrow(new Error("'id' param expected to be a positive number"))
        })

        it('sould throw an error if email not valid', () => {
            const cb = () => new Employee("joaquin", 1, "joaquin@fakemail")

            expect(cb).toThrow(new Error("'email' param expected to be a string with '@' '.' and no spaces "))
        })

        it('sould throw an error if email is an empty string', () => {
            const cb = () => new Employee("joaquin", 1, '')

            expect(cb).toThrow(new Error("'email' param expected to be a string with '@' '.' and no spaces "))
        })
    });

    describe('Employee methods', () => {

        it('Return the name attribute', () => {
            const employee = new Employee('employee', 1, "joaquin@fakemail.com");

            expect(employee.getName()).toBe('employee');
        });

        it('Return id attribute', () => {
            const employee = new Employee('employee', 1, "joaquin@fakemail.com");

            expect(employee.getId()).toBe(1);
        });


        it('Return email attribute', () => {
            const employee = new Employee('employee', 1, "joaquin@fakemail.com");

            expect(employee.getEmail()).toBe("joaquin@fakemail.com");
        });


        it('Return role of the Employee', () => {
            const employee = new Employee('employee', 1, "joaquin@fakemail.com");

            expect(employee.getRole()).toBe('Employee');
        });

    });
});