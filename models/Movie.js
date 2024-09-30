const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    age_certification: { type: String },
    release_year: { type: Number },
    runtime: { type: Number },
    genres: { type: [String] },
    production_countries: { type: [String] },
    type: { type: String },
    imdb_score: { type: Number }
});

module.exports = mongoose.model('Movie', movieSchema);
