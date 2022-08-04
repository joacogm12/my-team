const Manager = require('../lib/Manager')

describe('Manager class', () => {

    describe('create object', () => {
        it('Create an object', () => {
            const manager = new Manager("joaquin", 1, "joaquin@fakemail.com", 1,);

            expect(manager.name).toBe("joaquin");
            expect(manager.id).toBe(1);
            expect(manager.email).toBe("joaquin@fakemail.com");
            expect(manager.officeNumber).toBe(1)
        });

        it('sould throw an error if name is not provided', () => {
            const cb = () => new Manager("", 1, "joaquin@fakemail.com", 1)

            expect(cb).toThrow(new Error("'name' param expected to be a non-empty string"))
        })

        it('sould throw an error if ID is a number smaller than 0', () => {
            const cb = () => new Manager("joaquin", -1, "joaquin@fakemail.com", 1)

            expect(cb).toThrow(new Error("'id' param expected to be a positive number"))
        })

        it('sould throw an error if ID is not a number', () => {
            const cb = () => new Manager("joaquin", "uno", "joaquin@fakemail.com", 1)

            expect(cb).toThrow(new Error("'id' param expected to be a positive number"))
        })

        it('sould throw an error if email not valid', () => {
            const cb = () => new Manager("joaquin", 1, "joaquin@fakemail", 1)

            expect(cb).toThrow(new Error("'email' param expected to be a string with '@' '.' and no spaces "))
        })

        it('sould throw an error if email is an empty string', () => {
            const cb = () => new Manager("joaquin", 1, "", 1)

            expect(cb).toThrow(new Error("'email' param expected to be a string with '@' '.' and no spaces "))
        })

        it('sould throw an error if office number is not a number', () => {
            const cb = () => new Manager("joaquin", 1, "", "uno")

            expect(cb).toThrow(new Error("'officeNumber' param expected to be a number greater than 0"))
        })
    });

    describe('Manager methods', () => {

        it('Return the name attribute', () => {
            const manager = new Manager("joaquin", 1, "joaquin@fakemail.com", 1);

            expect(manager.getName()).toBe("joaquin");
        });

        it('Return id attribute', () => {
            const manager = new Manager("joaquin", 1, "joaquin@fakemail.com", 1);

            expect(manager.getId()).toBe(1);
        });

        it('Return email attribute', () => {
            const manager = new Manager("joaquin", 1, "joaquin@fakemail.com", 1);

            expect(manager.getEmail()).toBe("joaquin@fakemail.com");
        });

        it('Return office number attribute', () => {
            const manager = new Manager("joaquin", 1, "joaquin@fakemail.com", 1);

            expect(manager.getOfficeNumber()).toBe(1);
        });

        it('Return role of the Manager', () => {
            const manager = new Manager("joaquin", 1, "joaquin@fakemail.com", 1);

            expect(manager.getRole()).toBe('Manager');
        });

    });
});