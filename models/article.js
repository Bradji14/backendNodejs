'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = Schema({
    name: String,
    firstName: String,
    lastName: String,
    email: String,
    pasword: String,
    date: { type: Date, default: Date.now },
    image: String
});

module.exports = mongoose.model('Article', ArticleSchema);
// articles --> guarda documentos de este tipo y con estructura dentro de la colección