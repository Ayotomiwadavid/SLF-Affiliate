const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://websiteinvestment1:InvestmentForAbere@softlifedb.coksd3b.mongodb.net/SoftLifeDatabase", {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err);
});

db.once('open', () => {
    console.log('Databse Connection secured');
});

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = 5000 || process.env.PORT

app.listen(PORT, () => {
    console.log('server listening on port ' + PORT);
});