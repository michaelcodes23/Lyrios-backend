
// const { MongoClient } = require('mongodb');

const express = require('express');
// const cors = require('cors');
const router = express.Router();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const cors = require("cors")
// const connectDB = require('./config/db');

require('dotenv').config();
let bodyParser = require('body-parser');
// connectDB();
// const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
// MongoClient.connect(err => {
//   const collection = MongoClient.db("test").collection("devices");
//   // perform actions on the collection object
//   MongoClient.close(collection);
// });
//middleware
// app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(cors())

//controllers



const favoriteSongController = require('./controllers/favoriteSong')
app.use('/favsong', favoriteSongController);
// const index = require('././pages/index.js')
app.get('/', (req, res) => {
    res.send('server is working')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
mongoose.connect(URI || 'mongodb://localhost:27017/lyriosDB', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

