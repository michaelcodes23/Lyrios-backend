const mongoose = require('mongoose');



const favoriteSongSchema = new mongoose.Schema({
    name: String,
    email: String,
    favoriteSong: String,
    whyFavorite: String
}, {timestamps: true});

const favoriteSongCollection = mongoose.model('favsong', favoriteSongSchema, 'favoriteSong');

module.exports = favoriteSongCollection

