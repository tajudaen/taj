// Packages
const expect = require('expect');

// Custom Modules
const { validator } = require('../../utilities/validator');

describe('Validator', () => {
    it('should return valid if an object with the complete set of rules been validated is passed', () => {

        const data = {
            type: 'durban',
            crux: 'Indices',
            color: 'green',
            title: 'Indict the idiot'
        };

        const rules = ['type', 'crux', 'color', 'title'];

        const result = validator(data, rules);

        expect(result).toBe("valid");
    });

    it('should return the missing set of rules as an array if an object with the incomplete set of rules been validated is passed', () => {

        const data = {
            type: 'durban',
            crux: 'Indices',
            color: 'green',
        };

        const rules = ['type', 'crux', 'color', 'title'];

        const result = validator(data, rules);

        expect(result).toContain("title");
    });

    it('should return data is not an object if that data entry is not an object', () => {

        const rules = ['type', 'crux', 'color', 'title'];

        const result = validator('data', rules);

        expect(result).toBe("data must be an object");
    });

    it('should return rules is not an array', () => {

        const data = {
            type: 'durban',
            crux: 'Indices',
            color: 'green',
        };

        const result = validator(data, 'rules');

        expect(result).toBe("rules must be an array and cannot be empty");
    });

});