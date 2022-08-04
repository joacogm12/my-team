const Intern = require('../lib/Intern')

describe('Intern class', () => {

    describe('create object', () => {
        it('Create an object', () => {
            const intern = new Intern("joaquin", 1, "joaquin@fakemail.com", "school");

            expect(intern.name).toBe("joaquin");
            expect(intern.id).toBe(1);
            expect(intern.email).toBe("joaquin@fakemail.com");
            expect(intern.school).toBe("school")
        });

        it('sould throw an error if name is not provided', () => {
            const cb = () => new Intern("", 1, "joaquin@fakemail.com", "school")

            expect(cb).toThrow(new Error("'name' param expected to be a non-empty string"))
        })

        it('sould throw an error if ID is a number smaller than 0', () => {
            const cb = () => new Intern("joaquin", -1, "joaquin@fakemail.com", "school")

            expect(cb).toThrow(new Error("'id' param expected to be a positive number"))
        })

        it('sould throw an error if ID is not a number', () => {
            const cb = () => new Intern("joaquin", "uno", "joaquin@fakemail.com", "school")

            expect(cb).toThrow(new Error("'id' param expected to be a positive number"))
        })

        it('sould throw an error if email not valid', () => {
            const cb = () => new Intern("joaquin", 1, "joaquin@fakemail", "school")

            expect(cb).toThrow(new Error("'email' param expected to be a string with '@' '.' and no spaces "))
        })

        it('sould throw an error if email is an empty string', () => {
            const cb = () => new Intern("joaquin", 1, "", "school")

            expect(cb).toThrow(new Error("'email' param expected to be a string with '@' '.' and no spaces "))
        })

        it('sould throw an error if school is an empty string', () => {
            const cb = () => new Intern("joaquin", 1, "joaquin@fakemail", "")

            expect(cb).toThrow(new Error("'school' param expected to be a non-empty string"))
        })
    });

    describe('Intern methods', () => {

        it('Return the name attribute', () => {
            const intern = new Intern("joaquin", 1, "joaquin@fakemail.com", "school");

            expect(intern.getName()).toBe("joaquin");
        });

        it('Return id attribute', () => {
            const intern = new Intern("joaquin", 1, "joaquin@fakemail.com", "school");

            expect(intern.getId()).toBe(1);
        });

        it('Return email attribute', () => {
            const intern = new Intern("joaquin", 1, "joaquin@fakemail.com", "school");

            expect(intern.getEmail()).toBe("joaquin@fakemail.com");
        });

        it('Return email attribute', () => {
            const intern = new Intern("joaquin", 1, "joaquin@fakemail.com", "school");

            expect(intern.getSchool()).toBe("school");
        });

        it('Return role of the Intern', () => {
            const intern = new Intern("joaquin", 1, "joaquin@fakemail.com", "school");

            expect(intern.getRole()).toBe('Intern');
        });

    });
});