const mongoose = require('mongoose')

const user_details = mongoose.Schema({
    userID:{
        type: String,
        unique: true,
        required: true,
    }, userName:{
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('user_details_db', user_details)