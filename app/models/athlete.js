var mongoose = require('mongoose');

module.exports = mongoose.model('Athlete', {
    FirstName: {type: String, required: true },
    LastName: {type: String, required: true }, 
    DateOfBirth: {type: Date, required: true },
    Nationality: {type: String, required: true },
    Location: {type: String, required: true },
    Association: {type: String, required: true }, 
    Team: {type: String, required: true }, 
    Gender: {type: String, required: true },
    Sports: {type: String, required: true }, 
    About: {type: String, required: true },
    Interests: {type: String, required: true },
    Charities: {type: String, required: true },
    SocialMediaHandles: {type: Object, required: true },
    Pets: {type: String, required: true },
    DrinksAlcohol: {type: Boolean, required: true },
    Married: {type: Boolean, required: true }
});