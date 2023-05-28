var movieService = require('./../service/movieService');

async function getAllMovies(req, res, next){
    const movies = await movieService.getAllMovies();
}

module.exports = {
    getAllMovies,
};