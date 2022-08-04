const Engineer = require('../lib/Engineer')

describe('Engineer class', () => {

    describe('create object', () => {
        it('Create an object', () => {
            const engineer = new Engineer("joaquin", 1, "joaquin@fakemail.com", "joacogm12");

            expect(engineer.name).toBe("joaquin");
            expect(engineer.id).toBe(1);
            expect(engineer.email).toBe("joaquin@fakemail.com");
            expect(engineer.gitHub).toBe("joacogm12")
        });

        it('sould throw an error if name is not provided', () => {
            const cb = () => new Engineer("", 1, "joaquin@fakemail.com", "joacogm12")

            expect(cb).toThrow(new Error("'name' param expected to be a non-empty string"))
        })

        it('sould throw an error if ID is a number smaller than 0', () => {
            const cb = () => new Engineer("joaquin", -1, "joaquin@fakemail.com", "joacogm12")

            expect(cb).toThrow(new Error("'id' param expected to be a positive number"))
        })

        it('sould throw an error if ID is not a number', () => {
            const cb = () => new Engineer("joaquin", "uno", "joaquin@fakemail.com", "joacogm12")

            expect(cb).toThrow(new Error("'id' param expected to be a positive number"))
        })

        it('sould throw an error if email not valid', () => {
            const cb = () => new Engineer("joaquin", 1, "joaquin@fakemail", "joacogm12")

            expect(cb).toThrow(new Error("'email' param expected to be a string with '@' '.' and no spaces "))
        })

        it('sould throw an error if email is an empty string', () => {
            const cb = () => new Engineer("joaquin", 1, "", "joacogm12")

            expect(cb).toThrow(new Error("'email' param expected to be a string with '@' '.' and no spaces "))
        })

        it('sould throw an error if github is an empty string', () => {
            const cb = () => new Engineer("joaquin", 1, "joaquin@fakemail.com", "")

            expect(cb).toThrow(new Error("'github' param expected to be a non-empty string"))
        })
    });

    describe('Engineer methods', () => {

        it('Return the name attribute', () => {
            const engineer = new Engineer("joaquin", 1, "joaquin@fakemail.com", "joacogm12");

            expect(engineer.getName()).toBe("joaquin");
        });

        it('Return id attribute', () => {
            const engineer = new Engineer("joaquin", 1, "joaquin@fakemail.com", "joacogm12");

            expect(engineer.getId()).toBe(1);
        });


        it('Return email attribute', () => {
            const engineer = new Engineer("joaquin", 1, "joaquin@fakemail.com", "joacogm12");

            expect(engineer.getEmail()).toBe("joaquin@fakemail.com");
        });

        it('Return email attribute', () => {
            const engineer = new Engineer("joaquin", 1, "joaquin@fakemail.com", "joacogm12");

            expect(engineer.getGitHub()).toBe("joacogm12");
        });

        it('Return role of the Engineer', () => {
            const engineer = new Engineer("joaquin", 1, "joaquin@fakemail.com", "joacogm12");

            expect(engineer.getRole()).toBe('Engineer');
        });

    });
});