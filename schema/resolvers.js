const User = require('../models/User.js');
const Movie = require('../models/Movie.js');

const resolvers = {
    Query: {
        async getUsers() {
            return await User.find();
        },
        async getMovies() {
            return await Movie.find();
        },
        async getMovieByTitle(_, { title }) {
            const movie = await Movie.findOne({ title: title });
            if (!movie) {
                throw new Error('Movie not found');
            }
            return movie;
        }
    },
    Mutation: {
        async createUser(_, { userInput: { id, name, age, gender } }) {
            const user = new User({ id, name, age, gender });
            const res = await user.save();
            return { id: res.id, ...res._doc };
        },
        async createMovie(_, { movieInput }) {
            const movie = new Movie(movieInput);
            const res = await movie.save();
            return { id: res.id, ...res._doc };
        },
        async updateMovie(_, { movieInput: { title, description, runtime, genres, imdb_score } }) {
            const updatedMovie = await Movie.findOneAndUpdate(
                { title: title },
                { description, runtime, genres, imdb_score },
                { new: true }
            );

            if (!updatedMovie) {
                throw new Error('Movie not found');
            }

            return updatedMovie;
        },
        async deleteMovie(_, { title }) {
            const deletedMovie = await Movie.findOneAndDelete({ title: title });
            if (!deletedMovie) {
                throw new Error('Movie not found');
            }
            return `Movie titled "${title}" has been deleted.`;
        }
    }
};

module.exports = { resolvers };
