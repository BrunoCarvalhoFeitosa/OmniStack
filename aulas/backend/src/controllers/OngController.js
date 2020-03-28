//Importing generate ID from utils 
const generateUniqueId = require('../utils/generateUniqueId');

//Connection with SQLite
const connection = require('../database/connection');

module.exports = {

    //Async function to get ongs
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    //Async function to register ongs and getting informations by ID
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
}