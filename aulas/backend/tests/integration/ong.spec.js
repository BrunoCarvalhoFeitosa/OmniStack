//Importing supertest to test integratons between database
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    //Async function to read migrations from database to execute tests
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    //Async function to destroy connection with database after all tests
    afterAll(async () => {
        await connection.destroy();
    });

    //Function to describe type of test and create a test in POST method
    it('shlould be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Abraçare",
                email: "contato.abracare@ong.com",
                whatsapp: "11999999999",
                city: "Diadema", 
                uf: "SP"
            });

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    });
});