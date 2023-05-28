let moviesModel = require('../model/movies');

async function getAllMovies(){
    let Movies = await moviesModel.find();
    return Movies;
}


module.exports = {
    getAllMovies,
}