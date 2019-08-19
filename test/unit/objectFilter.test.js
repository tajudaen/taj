// Packages
const expect = require('expect');

// Custom Modules
const { objectFilter } = require('../../utilities/objectFilter');

describe('Object Filter', () => {
    it('should return an object with the remaining attributes the passed string is found', () => {

        const data = {
            type: 'durban',
            crux: 'Indices',
            color: 'green',
            title: 'Indict the idiot'
        };

        const result = objectFilter(data, 'title');

        expect(result).toEqual({ type: 'durban', crux: 'Indices', color: 'green' });
    });

    it('should return attribute not found if the passed string is not an attribute in the passed object', () => {

        const data = {
            type: 'durban',
            crux: 'Indices',
            color: 'green',
        };

        const result = objectFilter(data, 'test');

        expect(result).toBe("attribute not found");
    });

    it('should return data is not an object if that data entry is not an object', () => {

        const result = objectFilter('data', 'test');

        expect(result).toBe("data must be an object");
    });

    it('should return the second argument must be a string', () => {

        const data = {
            type: 'durban',
            crux: 'Indices',
            color: 'green',
        };

        const result = objectFilter(data, ['test']);

        expect(result).toBe("value must be a string");
    });

});