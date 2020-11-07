//Importing generate ID from utils
const generateUniqueId = require('../../src/utils/generateUniqueId');

//Function to describe type of test and create a test
describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});