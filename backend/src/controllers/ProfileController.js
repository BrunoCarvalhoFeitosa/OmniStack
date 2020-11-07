//Connection with SQLite
const connection = require('../database/connection');

module.exports = {

    //Async function to list a specific incident of a ong
    async index(request, response) {
        const ong_id = request.headers.authorization;
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');
        
            return response.json(incidents);
    }
}