let mongoose = require('mongoose');

// create a model class
let surveySchema = mongoose.Schema({
    email: String,
    surveyid: String,
    questions: {
        quesid: String,
        question: String
    }
},
{
    collection: "surveyques"
});

module.exports = mongoose.model('surveys', surveySchema);