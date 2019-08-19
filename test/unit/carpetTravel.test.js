// Packages
const expect = require('expect');

const { carpetTravel } = require('../../utilities/carpetTravel');

describe('Carpet Travel', () => {
    it('should return 0', () => {

        const magic = [3, 2, 5, 4];
        const dist = [2, 3, 4, 2];

        const result = carpetTravel(magic, dist, 0);

        console.log(result);
    });
});