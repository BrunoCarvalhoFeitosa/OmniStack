//Module to generate hash code to ID of ong
const crypto = require('crypto');
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
        const id = crypto.randomBytes(4).toString('HEX');
    
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